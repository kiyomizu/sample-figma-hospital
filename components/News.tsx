import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Calendar, ChevronRight } from "lucide-react"

export function News() {
  const news = [
    {
      date: "2025年1月15日",
      category: "お知らせ",
      title: "年末年始の診療について",
      description: "12月29日〜1月3日は休診とさせていただきます。救急外来は24時間対応いたします。",
      type: "info"
    },
    {
      date: "2025年1月10日",
      category: "新着情報",
      title: "MRI装置を最新機種に更新しました",
      description: "より精密で短時間での検査が可能になりました。予約制となっておりますのでお気軽にお問い合わせください。",
      type: "news"
    },
    {
      date: "2025年1月5日",
      category: "健康情報",
      title: "インフルエンザ予防接種について",
      description: "当院でもインフルエンザ予防接種を実施しております。ご希望の方は事前にお電話でご予約ください。",
      type: "health"
    },
    {
      date: "2024年12月20日",
      category: "イベント",
      title: "健康講座「糖尿病予防について」開催",
      description: "1月20日（土）14:00より健康講座を開催いたします。参加費無料、事前予約制です。",
      type: "event"
    }
  ]

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "info": return "default"
      case "news": return "secondary"
      case "health": return "outline"
      case "event": return "destructive"
      default: return "default"
    }
  }

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">お知らせ・ニュース</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            病院からの重要なお知らせや健康に関する情報をお届けします
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {news.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={getBadgeVariant(item.type)}>
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </CardDescription>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  詳細を見る
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            すべてのお知らせを見る
          </Button>
        </div>
      </div>
    </section>
  )
}