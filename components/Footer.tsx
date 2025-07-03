import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* 病院情報 */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">医</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">さくら総合病院</h3>
                <p className="text-sm text-gray-400">Sakura General Hospital</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              地域の皆様の健康を守るため、最新の医療技術と温かい心で
              診療にあたっております。
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* 診療科目 */}
          <div>
            <h4 className="font-semibold text-lg mb-6">診療科目</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">内科</a></li>
              <li><a href="#" className="hover:text-white transition-colors">循環器内科</a></li>
              <li><a href="#" className="hover:text-white transition-colors">脳神経外科</a></li>
              <li><a href="#" className="hover:text-white transition-colors">整形外科</a></li>
              <li><a href="#" className="hover:text-white transition-colors">眼科</a></li>
              <li><a href="#" className="hover:text-white transition-colors">小児科</a></li>
            </ul>
          </div>

          {/* お問い合わせ情報 */}
          <div>
            <h4 className="font-semibold text-lg mb-6">お問い合わせ</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>info@hospital.jp</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span>〒100-0001<br />東京都千代田区千代田1-1-1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5" />
                <span>平日 9:00-17:00</span>
              </div>
            </div>
          </div>

          {/* メールマガジン */}
          <div>
            <h4 className="font-semibold text-lg mb-6">健康情報メルマガ</h4>
            <p className="text-gray-300 mb-4">
              健康に関する情報やお知らせを
              メールでお届けします。
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="メールアドレス" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                登録する
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 さくら総合病院. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}