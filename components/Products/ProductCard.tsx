"use client"

import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"

export function ProductCard({
  img,
  alt,
  name,
  desc,
  price,
  button
}: {
  img: string
  alt: string
  name: string
  desc: string
  price: string,
  button: string,
  key: string
}) {
  return (
    <Card className="w-72 border-r-8 border-b-4 border-yellow-500 rounded-none mb-4 mr-6 flex flex-col items-center" key={name}>
        <CardHeader className="h-64 w-96 -mt-6">
            <Image
            src={img}
            alt={name}
            width={0}
            height={0}
            className="object-cover w-full h-full"
            />
        </CardHeader>
        <CardContent className="">
            <CardTitle className="pb-2">{name}</CardTitle>
            <CardDescription className="pb-2">
            {desc}
            </CardDescription>
            <CardDescription className="pt-2 text--foreground text-xl">
            {price}
            </CardDescription>
            <Button asChild size="lg" className="flex mt-6">
                {button}
            </Button>
        </CardContent>
    </Card>
  )
}
