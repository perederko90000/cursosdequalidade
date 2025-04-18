import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MotionDiv } from "@/components/motion-div";

export default function SalesLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Descubra Ofertas Incríveis</h1>
        <p className="text-lg text-gray-600">Produtos exclusivos com preços imperdíveis. Aproveite agora!</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <MotionDiv key={item} className="hover:scale-105 transition-transform">
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-4">
                <img
                  src={`https://source.unsplash.com/random/300x200?sig=${item}`}
                  alt="Produto"
                  className="rounded-xl mb-4"
                />
                <h2 className="text-xl font-semibold">Produto {item}</h2>
                <p className="text-gray-600">Descrição breve do produto que destaca seus principais benefícios.</p>
                <Button className="mt-4 w-full">Comprar Agora</Button>
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-2">Receba novidades e promoções</h2>
        <p className="text-gray-600 mb-4">Assine nossa newsletter para não perder nenhuma oferta!</p>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <Input placeholder="Digite seu e-mail" className="rounded-xl" />
          <Button className="rounded-xl">Inscrever</Button>
        </div>
      </section>
    </div>
  );
}
