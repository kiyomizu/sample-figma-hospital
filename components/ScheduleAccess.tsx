import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Clock, MapPin, Car, Train } from "lucide-react"

export function ScheduleAccess() {
  const schedule = [
    { day: "月曜日", morning: "9:00-12:00", afternoon: "14:00-17:00" },
    { day: "火曜日", morning: "9:00-12:00", afternoon: "14:00-17:00" },
    { day: "水曜日", morning: "9:00-12:00", afternoon: "14:00-17:00" },
    { day: "木曜日", morning: "9:00-12:00", afternoon: "14:00-17:00" },
    { day: "金曜日", morning: "9:00-12:00", afternoon: "14:00-17:00" },
    { day: "土曜日", morning: "9:00-12:00", afternoon: "休診" },
    { day: "日曜日", morning: "休診", afternoon: "休診" }
  ]

  return (
    <section id="schedule" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 診療時間 */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-2xl">診療時間</CardTitle>
              </div>
              <CardDescription>
                受付時間は診療終了30分前までとなります
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="font-medium text-gray-800">{item.day}</span>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{item.morning}</div>
                      <div className="text-sm text-gray-600">{item.afternoon}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">緊急時・救急外来</h4>
                <p className="text-sm text-red-700">24時間365日対応</p>
                <p className="text-sm text-red-700">TEL: 03-1234-5678</p>
              </div>
            </CardContent>
          </Card>

          {/* アクセス */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-green-600" />
                <CardTitle className="text-2xl">アクセス</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">住所</h4>
                <p className="text-gray-600">〒100-0001<br />東京都千代田区千代田1-1-1</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">交通アクセス</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Train className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800">電車でお越しの場合</p>
                      <p className="text-sm text-gray-600">JR山手線「東京駅」徒歩5分<br />東京メトロ丸ノ内線「東京駅」徒歩3分</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800">お車でお越しの場合</p>
                      <p className="text-sm text-gray-600">駐車場完備（100台）<br />平日3時間まで無料</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">お問い合わせ</h4>
                <p className="text-sm text-blue-700">TEL: 03-1234-5678</p>
                <p className="text-sm text-blue-700">FAX: 03-1234-5679</p>
                <p className="text-sm text-blue-700">E-mail: info@hospital.jp</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}