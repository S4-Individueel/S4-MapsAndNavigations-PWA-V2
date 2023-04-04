import dynamic from "next/dynamic";
import {useEffect, useState} from "react";
import Head from "next/head";

const Map = dynamic(() => import("../components/map/Map"), { ssr: false });

export default function Home() {
  const [location, setLocation] = useState<location>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const { latitude, longitude } = coords;
          setLocation({latitude, longitude})
        });
      }
    }
  })


  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
      </Head>
      <Map center={location!} zoom={13} />
    </>
  )
}
