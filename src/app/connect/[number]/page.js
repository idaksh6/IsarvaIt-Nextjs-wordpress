import { redirect } from "next/navigation";

export default async function ConnectRedirectPage({ params }) {
  const { number } = await params;

  // 1. Check if it's a WhatsApp group invite code (typically 20-24 characters, alphanumeric)
  const isGroupInvite = /^[a-zA-Z0-9_-]{18,26}$/.test(number);
  const hasLetters = /[a-zA-Z]/.test(number);

  if (isGroupInvite && hasLetters) {
    redirect(`https://chat.whatsapp.com/${number}`);
  }

  // 2. Otherwise, treat as a mobile number. Clean spaces, dashes, or non-numeric characters
  const cleanNumber = number.replace(/\D/g, "");

  // Basic validation check for standard international mobile number length (7 to 15 digits)
  if (cleanNumber.length >= 7 && cleanNumber.length <= 15) {
    redirect(`https://wa.me/${cleanNumber}`);
  }

  // Fallback if the input is invalid
  redirect("/");
}
