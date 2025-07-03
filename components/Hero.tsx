import { Button } from "./ui/button"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Heart, Shield, Users } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              地域に愛される<br />
              <span className="text-blue-600">総合病院</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              患者様一人ひとりに寄り添い、最新の医療技術と温かい心で
              地域の皆様の健康をサポートいたします。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                診療予約はこちら
              </Button>
              <Button variant="outline" size="lg">
                診療科目を見る
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">思いやりのある医療</h3>
                <p className="text-sm text-gray-600">患者様に寄り添う</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">最新の医療技術</h3>
                <p className="text-sm text-gray-600">安全で確実な治療</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">地域密着</h3>
                <p className="text-sm text-gray-600">35年の信頼と実績</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="病院の外観"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
              <h4 className="font-semibold text-gray-800 mb-3">緊急時対応</h4>
              <p className="text-sm text-gray-600 mb-3">24時間365日対応</p>
              <Button size="sm" className="bg-red-600 hover:bg-red-700 w-full">
                救急外来
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}