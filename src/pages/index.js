import Image from "next/image";

export default function Home() {
  const links = [
    { name: "WFO Schedule", url: "https://wfo-days.vercel.app/" },
    { name: "AES-GCM (Decrypt & Encrypt)", url: "https://cryptx-web.vercel.app/" }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4">

      <div className="text-center mb-8">

        <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-white mx-auto mb-6">
          <Image
            src="/image/bafweb.jpg"
            alt="profile"
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold">BAFWEB Squads</h1>
      </div>

      <div className="w-full max-w-sm space-y-3">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-white text-black py-3 rounded-xl font-semibold hover:scale-105 transition transform"
          >
            {link.name}
          </a>
        ))}
      </div>

    </div>
  );
}