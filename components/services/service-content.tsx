"use client";

import { useEffect, useState } from "react";
import { type Service } from "@/lib/services-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import PriceDisplay from "@/components/shared/price-display";
import ServiceDisclaimer from "./service-disclaimer";

interface ServiceContentProps {
  service: Service;
}

export default function ServiceContent({ service }: ServiceContentProps) {
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState(service.subServices[0]?.title);

  const processHashAndUpdateTab = (
    hash: string,
    shouldScroll: boolean = false
  ) => {
    if (hash) {
      try {
        // Decode the URL component to handle special characters like ñ
        const decodedHash = decodeURIComponent(hash);
        // Convert hash back to title format
        const tabTitle = decodedHash.replace(/-/g, " ");

        const matchingSubService = service.subServices.find(
          (sub) => sub.title.toLowerCase() === tabTitle.toLowerCase()
        );

        if (matchingSubService) {
          setActiveTab(matchingSubService.title);

          if (shouldScroll) {
            // Scroll to the tabs section after a short delay to ensure the tab is rendered
            setTimeout(() => {
              const tabsSection = document.querySelector("[data-tabs-section]");
              if (tabsSection) {
                const navbarOffset = 100; // Account for sticky navbar and some extra space
                const elementPosition =
                  tabsSection.getBoundingClientRect().top +
                  window.pageYOffset -
                  navbarOffset;

                // Use Lenis if available, otherwise fallback to native scroll
                const lenis = (window as any).lenis;

                if (lenis && typeof lenis.scrollTo === "function") {
                  lenis.scrollTo(elementPosition, {
                    duration: 1.2,
                    easing: (t: number) =>
                      Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                  });
                } else {
                  window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth",
                  });
                }
              }
            }, 300);
          }
          return true;
        } else {
          console.warn("No matching subservice found for:", tabTitle);
        }
      } catch (error) {
        console.warn("Error processing hash:", error);
      }
    }
    return false;
  };

  useEffect(() => {
    // Check if there's a hash in the URL to set the active tab
    const hash = window.location.hash.substring(1);
    processHashAndUpdateTab(hash, true);
  }, [service.subServices]);

  // Listen for hash changes while on the same page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      processHashAndUpdateTab(hash, true); // Always scroll when changing hash on same page
    };

    // Also listen for popstate (back/forward buttons)
    const handlePopState = () => {
      const hash = window.location.hash.substring(1);
      processHashAndUpdateTab(hash, true);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [service.subServices]);

  return (
    <section className="pb-20">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-8">
            <p className="text-5xl font-bromello max-w-sm mx-auto text-center">
              {service.shortDescription}
            </p>
            <p className="text-center mx-auto max-w-2xl">{service.longDescription}</p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-8 "
            data-tabs-section
          >
            <TabsList className="w-full justify-start bg-zinc-900 text-coral-light sticky top-20">
              <div className="text-2xl text-amber-600 ml-4 font-bold mr-auto">
                {service.title}
              </div>
              {service.subServices.map((subService) => (
                <TabsTrigger
                  key={subService.title}
                  value={subService.title}
                  className="data-[state=active]:bg-amber-600"
                >
                  {subService.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {service.subServices.map((subService) => (
              <TabsContent key={subService.title} value={subService.title}>
                <div className="space-y-6 max-w-xl mx-auto">
                  <p className="text-md font-bold text-amber-600 text-center max-w-md mx-auto">
                    {subService.shortDescription}
                  </p>
                  <p className="text-xl font-bold text-center">
                    Características
                  </p>
                  <p className="text-md">{subService.longDescription}</p>
                  <div className="space-y-4">
                    {subService.characteristics.map((characteristic) => (
                      <div key={characteristic.title}>
                        <h3 className="text-lg font-bold">
                          {characteristic.title}
                        </h3>
                        <p className="text-sm">{characteristic.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                  {subService.packages.map((pkg) => (
                    <Card
                      key={pkg.name}
                      className="bg-zinc-900 border-zinc-800"
                    >
                      <CardHeader>
                        <CardTitle>{pkg.name}</CardTitle>
                        <CardDescription>
                          <span className="text-2xl font-bold text-amber-600">
                            <PriceDisplay priceUSD={pkg.priceUSD} />
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {pkg.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2"
                            >
                              <Check className="h-4 w-4 text-amber-600" />
                              <span className="text-sm text-white">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full bg-amber-600 hover:bg-amber-700"
                          onClick={() =>
                            addItem({
                              serviceId: service.id,
                              serviceTitle: service.title,
                              subServiceTitle: subService.title,
                              ...pkg,
                            })
                          }
                        >
                          Agregar al Carrito
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Disclaimer */}
          <div className="mt-12">
            <ServiceDisclaimer />
          </div>
        
        </div>
      </div>
    </section>
  );
}
