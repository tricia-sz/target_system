import { FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router";

export default function SocialMedia() {
  const redes = [
    {
      nome: "Instagram",
      url: "https://www.instagram.com/targetsistemas/",
      icon: <FaInstagramSquare size={36} />,
    },
    {
      nome: "Facebook",
      url: "https://www.linkedin.com/company/target-sistemas/",
      icon: <IoLogoFacebook size={36} />,
    },
    {
      nome: "LinkedIn",
      url: "https://www.linkedin.com/company/target-sistemas/",
      icon: <FaLinkedin size={36} />,
    },
    {
      nome: "YouTube",
      url: "https://www.youtube.com/channel/UCukianZM5tsCfki5m1ZLUJQ",
      icon: <FaYoutube size={36} />,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4">
        {redes.map((rede) => (
          <Link
            to={rede.url}
            key={rede.nome}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={rede.nome}
            className="text-2xl text-orange-950 transition-all duration-200 hover:scale-110 hover:text-orange-600"
          >
            {rede.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
