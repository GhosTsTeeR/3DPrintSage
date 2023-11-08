import React from 'react'
import CardPrinter from '../components/card/CardPrinter';

export default function AllPrinters() {
    const datosCard = [
        {
          id:"prusa-i3-MK3",
          img: [
            {
              path: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
            },
            {
              path: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    
            },
            {
              path: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
            },
            {
              path: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    
            }
          ],
          titulo: "Prusa i3 MK3",
          parrafo: "La Prusa i3 MK3 es una impresora 3D de código abierto ampliamente reconocida por su fiabilidad y calidad de impresión. Es una excelente opción para usuarios principiantes y avanzados."
        },
        {
          id:"creality-ender-3",
          img: [
    
            {
              path: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
            },
            {
              path: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    
            },
            {
              path: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    
            }
          ],
          titulo: "Creality Ender 3",
          parrafo: "La Creality Ender 3 es una impresora 3D asequible y popular que ofrece una buena relación calidad-precio. Es fácil de ensamblar y es adecuada para aquellos que recién comienzan en la impresión 3D."
        },
        {
          id:"ultimaker-S5",
          img: [
            {
              path: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
            },
            {
              path: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    
            },
            {
              path: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
            },
            {
              path: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    
            }
          ],
          titulo: "Ultimaker S5",
          parrafo: "La Ultimaker S5 es una impresora 3D de alta gama que ofrece una calidad de impresión excepcional. Es ideal para entusiastas de la impresión 3D que buscan resultados profesionales."
        },
        {
          id:"anycubic-photon",
          img: [
            {
              path: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
            },
            {
              path: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
            },
            {
              path: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    
            }
          ],
          titulo: "Anycubic Photon",
          parrafo: "La Anycubic Photon es una impresora 3D de resina que brinda detalles impresionantes en objetos pequeños y detallados. Es una excelente opción para la impresión de alta precisión."
        },
        {
          id:"formlabs-form-3",
          img: [
            {
              path: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
            },
            {
              path: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    
            },
            {
              path: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
            },
            {
              path: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    
            }
          ],
          titulo: "Formlabs Form 3",
          parrafo: "La Formlabs Form 3 es una impresora 3D de resina SLA que ofrece impresiones de alta calidad y es utilizada comúnmente en aplicaciones profesionales como odontología y joyería."
        },
        {
          id:"LulzBot-TAZ-6",
          img: [
            {
              path: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
            },
            {
              path: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    
            },
            {
              path: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
            },
            {
              path: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    
            }
          ],
          titulo: "LulzBot TAZ 6",
          parrafo: "La LulzBot TAZ 6 es una impresora 3D de código abierto conocida por su robustez y capacidad para imprimir con una variedad de materiales. Es una buena opción para entusiastas avanzados."
        },
        {
          id:"FlashForge-creator-pro",
          img: [
            {
              path: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
            },
    
          ],
          titulo: "FlashForge Creator Pro",
          parrafo: "La FlashForge Creator Pro es una impresora 3D de doble extrusión que permite la impresión de objetos en múltiples colores o materiales. Es adecuada para usuarios con experiencia."
        },
        {
          id:"monoprice-select-mini-v2",
          img: [
            {
              path: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
            },
            {
              path: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    
            },
            {
              path: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
            },
            {
              path: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    
            }
          ],
          titulo: "Monoprice Select Mini V2",
          parrafo: "La Monoprice Select Mini V2 es una impresora 3D asequible y compacta ideal para principiantes. Ofrece una introducción fácil a la impresión 3D."
        },
        {
          id:"BCN3D-sigma-R19",
          img: [
            {
              path: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
            },
            {
              path: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    
            },
            {
              path: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
            },
            {
              path: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    
            }
          ],
          titulo: "BCN3D Sigma R19",
          parrafo: "La BCN3D Sigma R19 es una impresora 3D de doble extrusión que destaca por su calidad de impresión y fiabilidad. Es adecuada para usuarios que buscan impresiones detalladas."
        },
      ];
      const mode = "ModeLight"
  return (
    <div className={"GM__"+mode+"__main"} >
      <div className={"GM__"+mode+"__main-printers"}>
        <CardPrinter datosCard= {datosCard} count={datosCard.length}/>
      </div>
    </div>
  )
}