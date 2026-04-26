import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="bg-card p-10 rounded-2xl shadow-lg text-center max-w-lg">
        <CheckCircle className="mx-auto text-green-500 mb-6" size={70} />

        <h1 className="text-3xl font-bold mb-4">
          Message Sent Successfully 🎉
        </h1>

        <p className="text-muted-foreground mb-8">
          Thank you for reaching out. I will get back to you shortly.
        </p>

        <Link
          to="/"
          className="bg-primary text-white px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}