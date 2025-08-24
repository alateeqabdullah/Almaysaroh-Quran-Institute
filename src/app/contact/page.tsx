
import H2 from "@/components/H2";
import ContactForm from "@/components/ui/ContactForm";
import GoogleMap from "@/components/ui/GoogleMap";
import { sleep } from "@/lib/utils";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquarePlus } from "lucide-react";

export default async function ContactPage() {
  await sleep(2000)
  return (
    <section className="min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <H2 className="text-green-700 ">Contact Us</H2>
        <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
          {`We’d love to hear from you. Whether you have a question about
          programs, pricing, or enrollment, our team is ready to answer all your
          questions.`}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-700">+234 801 234 5678</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-700">almaysaroh3117@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-700">{" Al-Maysaroh Qur'an Institute"}</p>
            </div>
            <div className="flex items-center gap-4">
              <MessageSquarePlus className="w-6 h-6 text-emerald-600" />
              <p className="text-gray-700">+2348185300293</p>
            </div>

            {/* Optional Map */}
            <GoogleMap />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
