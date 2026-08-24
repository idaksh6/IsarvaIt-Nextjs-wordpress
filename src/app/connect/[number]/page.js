import { redirect } from "next/navigation";

export default async function ConnectRedirectPage({ params }) {
  const { number } = await params;

  // Clean the number from any spaces, dashes, or non-numeric characters
  const cleanNumber = number.replace(/\D/g, "");

  // Basic validation check for standard international mobile number length (7 to 15 digits)
  if (cleanNumber.length >= 7 && cleanNumber.length <= 15) {
    redirect(`https://wa.me/${cleanNumber}`);
  }

  // Fallback if the number is invalid
  redirect("/");
}
