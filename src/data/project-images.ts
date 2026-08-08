import boscoImg from "@/assets/boscohero.jpeg";
import boscoProjImg from "@/assets/bosco-proj.jpeg";
import norteImg from "@/assets/estudionortepordada.avif";
import novaImg from "@/assets/proj-nova.jpg";
import camilaImg from "@/assets/proj-camila.jpg";

export const projectImages: Record<string, string> = {
  bosco: boscoImg,
  "bosco-proj": boscoProjImg,
  "estudio-norte": norteImg,
  "clinica-nova": novaImg,
  "camila-correa": camilaImg,
  "joyeria-cuore": "/cuorehome.avif",
};

export const projectGalleries: Record<string, string[]> = {
  "joyeria-cuore": [
    "/cuore-hero-taller.png",
    "/cuore-alianzas-reparaciones.png",
    "/cuore-catalogo.png",
  ],
  bosco: [
    boscoProjImg,
    boscoImg,
  ],
  "estudio-norte": [
    norteImg,
  ],
  "clinica-nova": [
    novaImg,
  ],
  "camila-correa": [
    camilaImg,
  ],
};
