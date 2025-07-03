import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Award, GraduationCap } from "lucide-react"

export function Doctors() {
  const doctors = [
    {
      name: "田中 太郎",
      position: "院長・循環器内科",
      speciality: "循環器疾患全般",
      experience: "医学博士・日本循環器学会専門医",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "佐藤 花子",
      position: "副院長・脳神経外科",
      speciality: "脳血管疾患・脳腫瘍",
      experience: "医学博士・日本脳神経外科学会専門医",
      image: "https://images.unsplash.com/photo-1594824694996-8e3dbaa2e35a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "山田 次郎",
      position: "整形外科部長",
      speciality: "関節外科・スポーツ医学",
      experience: "日本整形外科学会専門医・スポーツ認定医",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ]

  return (
    <section id="doctors" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">医師紹介</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            豊富な経験と専門知識を持つ医師が、患者様の健康をサポートいたします
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                </div>
                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  {doctor.position}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">{doctor.speciality}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm">{doctor.experience}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}