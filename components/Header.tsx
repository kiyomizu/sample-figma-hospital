import { Button } from "./ui/button"
import { Phone, Mail, Clock } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      {/* トップバー */}
      <div className="bg-blue-50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@hospital.jp</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>平日 9:00-17:00</span>
              </div>
            </div>
            <Button variant="outline" size="sm">
              オンライン予約
            </Button>
          </div>
        </div>
      </div>

      {/* メインナビゲーション */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">医</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">さくら総合病院</h1>
              <p className="text-sm text-gray-600">Sakura General Hospital</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              ホーム
            </a>
            <a href="#departments" className="text-gray-700 hover:text-blue-600 transition-colors">
              診療科目
            </a>
            <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition-colors">
              医師紹介
            </a>
            <a href="#schedule" className="text-gray-700 hover:text-blue-600 transition-colors">
              診療時間
            </a>
            <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors">
              お知らせ
            </a>
            <a href="#access" className="text-gray-700 hover:text-blue-600 transition-colors">
              アクセス
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700">
              お問い合わせ
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}