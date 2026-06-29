"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import { ArrowRight, MapPin, Coffee, Users } from "lucide-react";

const cities = ["Biarritz", "Bayonne", "Anglet", "Hossegor", "Saint-Jean-de-Luz"];
const delayClasses = ["", "delay-100", "delay-200", "delay-300", "delay-400"];

export function AnimatedLocalSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--ocean)_0%,transparent_50%)] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-in">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6 animate-in-left">
              <MapPin className="w-4 h-4" />
              Ancré localement
            </span>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Votre agence web<br />
              <span className="font-heading italic text-ocean-text">du Pays Basque</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Basés sur la Côte Basque, nous comprenons les enjeux locaux et les spécificités 
              de votre marché. De Biarritz à Bayonne en passant par Anglet, nous accompagnons 
              les entrepreneurs qui veulent se démarquer.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Notre approche combine la proximité d&apos;une agence locale avec l&apos;innovation 
              d&apos;une start-up tech. Rencontrons-nous autour d&apos;un café pour discuter 
              de votre projet !
            </p>
            
            {/* Cities Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {cities.map((city, index) => (
                <span
                  key={city}
                  className={`px-3 py-1.5 bg-foreground/5 border border-border rounded-full text-sm text-muted-foreground hover:border-ocean/30 hover:text-ocean transition-all duration-300 cursor-default animate-scale-in ${delayClasses[index] ?? ""}`}
                >
                  {city}
                </span>
              ))}
            </div>
            
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-ocean font-semibold hover:gap-4 transition-all duration-300"
            >
              <span className="flex items-center justify-center w-10 h-10 bg-ocean/10 border border-ocean/20 rounded-full group-hover:bg-ocean/20 transition-colors duration-300">
                <Coffee className="w-5 h-5" />
              </span>
              Prendre rendez-vous autour d&apos;un café
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div 
              className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border shadow-2xl group animate-scale-in"
              style={{ willChange: "transform", backfaceVisibility: "hidden" }}
            >
              <Image
                src="/images/home/biarritz-coast.webp"
                alt="Vue de Biarritz et la Grande Plage"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Location Badge */}
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-ocean" />
                  <span className="font-medium">Côte Basque, France</span>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 p-5 bg-card/90 backdrop-blur-sm rounded-2xl border border-border shadow-2xl animate-in delay-300">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face"
                    alt="Client"
                    width={44}
                    height={44}
                    className="rounded-full border-2 border-card"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFERIhBjFBgf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AMr8f8ltazYu2LN6RoJpnkVSqghSScAce/mMYyHyJqQDdpX/2Q=="
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                    alt="Client"
                    width={44}
                    height={44}
                    className="rounded-full border-2 border-card"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFERIhBjFBgf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AMr8f8ltazYu2LN6RoJpnkVSqghSScAce/mMYyHyJqQDdpX/2Q=="
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                    alt="Client"
                    width={44}
                    height={44}
                    className="rounded-full border-2 border-card"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFERIhBjFBgf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AMr8f8ltazYu2LN6RoJpnkVSqghSScAce/mMYyHyJqQDdpX/2Q=="
                  />
                  <div className="flex items-center justify-center w-11 h-11 bg-ocean/20 border-2 border-card rounded-full">
                    <Users className="w-4 h-4 text-ocean" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-ocean">50+</div>
                  <div className="text-xs text-muted-foreground">clients sur la Côte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
