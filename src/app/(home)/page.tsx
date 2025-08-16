import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-50 to-white text-black">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Take Your Skills to the Next Level
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Prepare for your exams with our AI-driven mock test platform.
            Practice, analyze, and succeed — all in one place.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 cursor-pointer">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer"
            >
              Free Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
