import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Heart, Brain, Eye, Baby, Bone, Stethoscope } from "lucide-react"

export function Departments() {
  const departments = [
    {
      icon: Heart,
      name: "循環器内科",
      description: "心臓・血管系の疾患を専門的に診療いたします。高血圧、心不全、不整脈等の治療を行っています。",
      color: "text-red-600 bg-red-100"
    },
    {
      icon: Brain,
      name: "脳神経外科",
      description: "脳卒中、脳腫瘍、頭部外傷等の診断・治療を最新の医療機器で行います。",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Bone,
      name: "整形外科",
      description: "骨折、関節痛、腰痛等の運動器疾患の治療とリハビリテーションを提供します。",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Eye,
      name: "眼科",
      description: "白内障、緑内障、糖尿病網膜症等の眼疾患の診断・治療を行っています。",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Baby,
      name: "小児科",
      description: "お子様の健康をトータルでサポート。予防接種から専門治療まで対応します。",
      color: "text-pink-600 bg-pink-100"
    },
    {
      icon: Stethoscope,
      name: "内科",
      description: "風邪から生活習慣病まで、幅広い内科疾患の診断・治療を行います。",
      color: "text-indigo-600 bg-indigo-100"
    }
  ]

  return (
    <section id="departments" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">診療科目</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            専門性の高い医療チームが、患者様の様々な症状に対応いたします
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${dept.color}`}>
                  <dept.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{dept.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {dept.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}