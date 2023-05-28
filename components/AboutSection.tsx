import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Unity" },
  { skill: "C#" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Acerca de nosotros
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Conócenos!
            </h1>
            <p>
              Hola, nuestro nombre es TBD, y somos{" "}
              <span className="font-bold">{"un equipo relativamente nuevo"}</span>,
              <span className="font-bold">{" con mucha energía"}</span> e 
              <span className="font-bold">{" innovación "}</span> basado en Piedecuesta, Santander, <span className="font-bold">{" Colombia. "}</span>
            </p>
            <br />
            <p>

              Actualmente somos un pequeño equipo conformado por cuatro estudiantes aprendiendo Programación en el SENA. Nuestro plan es seguir desarrollando juegos como un hobby. Nuestros nombres son:
            </p> <br/>
            <ol>
                <li>
                    <ul>
                        <li>Juan Pablo Lopez Díaz (JP)</li>
                        <li>Johan Portilla Aguirre (tronprogram)</li>
                        <li>César Andrés León</li>
                        <li>Daniel Mauricio Morales</li>
                    </ul>
                </li>
            </ol>
            <br />
            <p>
                Empezamos este equipo porque, para la mayoría, nuestro sueño es seguir programando y hacerlo nuestro trabajo.
              
            </p>
            <br />
            <p>
              
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Nuestras habilidades</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/graphicdesignismypassion.png"
              alt=""
              width={225}
              height={225}
              className="hidden md:block md:relative md:top-5 md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection