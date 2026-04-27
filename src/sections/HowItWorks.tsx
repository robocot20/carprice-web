import { Search, BarChart3, DollarSign, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Busca tu Vehículo',
      description: 'Selecciona la marca, modelo, submodelo y rango de años del vehículo que deseas consultar.',
      color: 'from-blue-500/20 to-blue-600/5',
      iconColor: 'text-blue-400',
    },
    {
      icon: BarChart3,
      title: 'Analizamos el Mercado',
      description: 'Nuestro sistema consulta miles de anuncios de SuperCarros.com y CarrosRD.com en segundos.',
      color: 'from-purple-500/20 to-purple-600/5',
      iconColor: 'text-purple-400',
    },
    {
      icon: DollarSign,
      title: 'Obtén el Precio Promedio',
      description: 'Te mostramos el precio promedio, mínimo y máximo basado en vehículos reales en venta.',
      color: 'from-green-500/20 to-green-600/5',
      iconColor: 'text-green-400',
    },
    {
      icon: CheckCircle,
      title: 'Toma Decisiones Informadas',
      description: 'Usa esta información para negociar, vender o comprar tu vehículo al mejor precio.',
      color: 'from-orange-500/20 to-orange-600/5',
      iconColor: 'text-orange-400',
    },
  ];

  return (
    <section id="como-funciona" className="w-full py-16 md:py-24 bg-[#131313]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-[#0082F3]" />
            <span className="text-sm text-white/70 font-mono uppercase tracking-wider">Proceso Simple</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            En solo 3 pasos puedes conocer el valor real de cualquier vehículo en el mercado dominicano.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-2 w-8 h-8 bg-[#0082F3] rounded-full flex items-center justify-center text-white font-medium text-sm z-10">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className={`h-full bg-gradient-to-br ${step.color} rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-[1.02]`}>
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                  <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-medium text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-white/10">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="w-10 h-10 bg-[#0082F3]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-[#0082F3]" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Datos Actualizados</h4>
              <p className="text-white/60 text-sm">Información actualizada diariamente de las principales plataformas de venta.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="w-10 h-10 bg-[#0082F3]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-[#0082F3]" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">100% Gratuito</h4>
              <p className="text-white/60 text-sm">Consulta ilimitada de precios sin costo alguno.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="w-10 h-10 bg-[#0082F3]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-[#0082F3]" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Sin Registro</h4>
              <p className="text-white/60 text-sm">Usa la herramienta sin necesidad de crear una cuenta.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
