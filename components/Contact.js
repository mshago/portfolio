import React from "react";
import userData from "@constants/data";
import { Button } from "./Button";
import { Section } from "./Section";

export default function Contact() {
  return (
    <Section id={"contact"}>
      <div>
        <h1 className="font-light text-3xl md:text-6xl pt-5 text-green-400 text-center">
          Get In Touch
        </h1>
      </div>
      <div className="py-4 lg:w-2/3 m-auto">
        <div className="flex justify-center">
          <p className="text-gray-300">
            Want to say hi? Feel free to send me a message!
          </p>
        </div>
        <div className="flex justify-center py-6">
          <Button title={"Let's Talk"} href={`mailto:${userData.email}`} />
        </div>
      </div>
    </Section>
  );
}
