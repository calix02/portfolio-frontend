import Stack from "@/component/Stack";
import P1 from "@/assets/poster/1.png";
import P2 from "@/assets/poster/2.png";
import P3 from "@/assets/poster/3.png";
import P4 from "@/assets/poster/4.png";
import P5 from "@/assets/poster/5.png";


export function GraphicPage() {
  const images = [
    P1,
    P2,
    P3,
    P4,
    P5,
    
  ];
  return (
    <section id="graphics" className="w-screen min-h-screen flex items-center justify-center py-24">
      <div style={{ width: 308, height: 430 }} className="rounded-2xl  shadow-2xl">
        <Stack
          randomRotation={false}
          sensitivity={200}
          sendToBackOnClick={true}
          cards={images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`card-${i + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ))}
        />
      </div>
    </section>
  );
}
