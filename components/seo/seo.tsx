// apppage.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "NCERT Solutions for Class 10 Maths - LearnCBSE.in",
  description: "Comprehensive NCERT solutions for Class 10 Maths with chapter-wise explanations, exercises, and important questions for CBSE board exams.",
  keywords: "NCERT Class 10 Maths, CBSE Maths Solutions, 10th Maths NCERT, Board Exam Preparation, Maths Formulas Class 10",
};

export default function Class10Maths() {
    const chapters = [
        {
          id: 1,
          title: "Real Numbers",
          slug: "real-numbers",
          exercises: 4,
          problems: 18,
          description: "Problems based on Euclid's division lemma, HCF and LCM, Fundamental Theorem of Arithmetic, and irrational numbers.",
          resources: [
            { type: "Ex 1.1", url: "chapter-1-real-numbers-exercise-1-1" },
            { type: "Ex 1.2", url: "chapter-1-real-numbers-exercise-1-2" },
            { type: "Ex 1.3", url: "chapter-1-real-numbers-exercise-1-3" },
            { type: "Ex 1.4", url: "chapter-1-real-numbers-exercise-1-4" },
            { type: "Extra Questions", url: "chapter-1-real-numbers-exercisetra-questions" },
            { type: "Important Questions", url: "chapter-1-real-numbers/important-questions" },
          ]
        },
        {
          id: 2,
          title: "Polynomials",
          slug: "polynomials",
          exercises: 4,
          problems: 13,
          description: "Finding polynomials, properties of zeros and coefficients, long division of polynomials, and finding zeros.",
          resources: [
            { type: "Ex 2.1", url: "chapter-2-polynomials-exercise-2-1" },
            { type: "Ex 2.2", url: "chapter-2-polynomials-exercise-2-2" },
            { type: "Ex 2.3", url: "chapter-2-polynomials-exercise-2-3" },
            { type: "Ex 2.4", url: "chapter-2-polynomials-exercise-2-4" },
          ]
        },
        {
          id: 3,
          title: "Pair of Linear Equations in Two Variables",
          slug: "pair-of-linear-equations",
          exercises: 7,
          problems: 55,
          description: "Solving linear equations, elimination method, cross-multiplication method, and real-life applications.",
          resources: [
            { type: "Ex 3.1", url: "chapter-3-pair-of-linear-equations-exercise-3-1" },
            { type: "Ex 3.2", url: "chapter-3-pair-of-linear-equations-exercise-3-2" },
            { type: "Ex 3.3", url: "chapter-3-pair-of-linear-equations-exercise-3-3" },
            { type: "Ex 3.4", url: "chapter-3-pair-of-linear-equations-exercise-3-4" },
            { type: "Ex 3.5", url: "chapter-3-pair-of-linear-equations-exercise-3-5" },
            { type: "Ex 3.6", url: "chapter-3-pair-of-linear-equations-exercise-3-6" },
            { type: "Ex 3.7", url: "chapter-3-pair-of-linear-equations-exercise-3-7" },
          ]
        },
        {
          id: 4,
          title: "Quadratic Equations",
          slug: "quadratic-equations",
          exercises: 4,
          problems: 24,
          description: "Finding roots of quadratic equations, quadratic formula, and real-world problem solving.",
          resources: [
            { type: "Ex 4.1", url: "chapter-4-quadratic-equations-exercise-4-1" },
            { type: "Ex 4.2", url: "chapter-4-quadratic-equations-exercise-4-2" },
            { type: "Ex 4.3", url: "chapter-4-quadratic-equations-exercise-4-3" },
            { type: "Ex 4.4", url: "chapter-4-quadratic-equations-exercise-4-4" },
          ]
        },
        {
          id: 5,
          title: "Arithmetic Progressions",
          slug: "arithmetic-progressions",
          exercises: 4,
          problems: 49,
          description: "Understanding AP, finding nth terms, sum of n terms, and solving real-life problems.",
          resources: [
            { type: "Ex 5.1", url: "chapter-5-arithmetic-progressions-exercise-5-1" },
            { type: "Ex 5.2", url: "chapter-5-arithmetic-progressions-exercise-5-2" },
            { type: "Ex 5.3", url: "chapter-5-arithmetic-progressions-exercise-5-3" },
            { type: "Ex 5.4", url: "chapter-5-arithmetic-progressions-exercise-5-4" },
          ]
        },
        {
          id: 6,
          title: "Triangles",
          slug: "triangles",
          exercises: 6,
          problems: 64,
          description: "Properties of triangles, similarity criteria, Pythagoras theorem, and important theorems.",
          resources: [
            { type: "Ex 6.1", url: "chapter-6-triangles-exercise-6-1" },
            { type: "Ex 6.2", url: "chapter-6-triangles-exercise-6-2" },
            { type: "Ex 6.3", url: "chapter-6-triangles-exercise-6-3" },
            { type: "Ex 6.4", url: "chapter-6-triangles-exercise-6-4" },
            { type: "Ex 6.5", url: "chapter-6-triangles-exercise-6-5" },
            { type: "Ex 6.6", url: "chapter-6-triangles-exercise-6-6" },
          ]
        },
        {
          id: 7,
          title: "Coordinate Geometry",
          slug: "coordinate-geometry",
          exercises: 4,
          problems: 33,
          description: "Distance formula, section formula, area of triangles, and coordinate geometry applications.",
          resources: [
            { type: "Ex 7.1", url: "chapter-7-coordinate-geometry-exercise-7-1" },
            { type: "Ex 7.2", url: "chapter-7-coordinate-geometry-exercise-7-2" },
            { type: "Ex 7.3", url: "chapter-7-coordinate-geometry-exercise-7-3" },
            { type: "Ex 7.4", url: "chapter-7-coordinate-geometry-exercise-7-4" },
          ]
        },
        {
          id: 8,
          title: "Introduction to Trigonometry",
          slug: "trigonometry",
          exercises: 4,
          problems: 27,
          description: "Trigonometric ratios, identities, complementary angles, and basic trigonometry concepts.",
          resources: [
            { type: "Ex 8.1", url: "chapter-8-trigonometry-exercise-8-1" },
            { type: "Ex 8.2", url: "chapter-8-trigonometry-exercise-8-2" },
            { type: "Ex 8.3", url: "chapter-8-trigonometry-exercise-8-3" },
            { type: "Ex 8.4", url: "chapter-8-trigonometry-exercise-8-4" },
          ]
        },
        {
          id: 9,
          title: "Applications of Trigonometry",
          slug: "applications-of-trigonometry",
          exercises: 1,
          problems: 16,
          description: "Heights and distances, angle of elevation/depression, and real-life applications.",
          resources: [
            { type: "Ex 9.1", url: "chapter-9-applications-of-trigonometry-exercise-9-1" },
            { type: "Extra Questions", url: "chapter-9-applications-of-trigonometry-exercisetra-questions" },
          ]
        },
        {
          id: 10,
          title: "Circles",
          slug: "circles",
          exercises: 2,
          problems: 17,
          description: "Tangents to circles, number of tangents from a point, and circle theorems.",
          resources: [
            { type: "Ex 10.1", url: "chapter-10-circles-exercise-10-1" },
            { type: "Ex 10.2", url: "chapter-10-circles-exercise-10-2" },
          ]
        },
        {
          id: 11,
          title: "Constructions",
          slug: "constructions",
          exercises: 2,
          problems: 14,
          description: "Dividing line segments, constructing similar triangles, and tangent constructions.",
          resources: [
            { type: "Ex 11.1", url: "chapter-11-constructions-exercise-11-1" },
            { type: "Ex 11.2", url: "chapter-11-constructions-exercise-11-2" },
          ]
        },
        {
          id: 12,
          title: "Areas Related to Circles",
          slug: "areas-related-to-circles",
          exercises: 3,
          problems: 35,
          description: "Perimeter and area of circles, sectors, segments, and combinations with other shapes.",
          resources: [
            { type: "Ex 12.1", url: "chapter-12-areas-related-to-circles-exercise-12-1" },
            { type: "Ex 12.2", url: "chapter-12-areas-related-to-circles-exercise-12-2" },
            { type: "Ex 12.3", url: "chapter-12-areas-related-to-circles-exercise-12-3" },
          ]
        },
        {
          id: 13,
          title: "Surface Areas and Volumes",
          slug: "surface-areas-volumes",
          exercises: 5,
          problems: 36,
          description: "Surface area and volume of combinations of solids like cubes, cuboids, cylinders, cones, and spheres.",
          resources: [
            { type: "Ex 13.1", url: "chapter-13-surface-areas-volumes-exercise-13-1" },
            { type: "Ex 13.2", url: "chapter-13-surface-areas-volumes-exercise-13-2" },
            { type: "Ex 13.3", url: "chapter-13-surface-areas-volumes-exercise-13-3" },
            { type: "Ex 13.4", url: "chapter-13-surface-areas-volumes-exercise-13-4" },
            { type: "Ex 13.5", url: "chapter-13-surface-areas-volumes-exercise-13-5" },
          ]
        },
        {
          id: 14,
          title: "Statistics",
          slug: "statistics",
          exercises: 4,
          problems: 25,
          description: "Mean, median, mode of grouped data, cumulative frequency, and graphical representations.",
          resources: [
            { type: "Ex 14.1", url: "chapter-14-statistics-exercise-14-1" },
            { type: "Ex 14.2", url: "chapter-14-statistics-exercise-14-2" },
            { type: "Ex 14.3", url: "chapter-14-statistics-exercise-14-3" },
            { type: "Ex 14.4", url: "chapter-14-statistics-exercise-14-4" },
          ]
        },
        {
          id: 15,
          title: "Probability",
          slug: "probability",
          exercises: 2,
          problems: 30,
          description: "Theoretical probability, experimental probability, and probability applications.",
          resources: [
            { type: "Ex 15.1", url: "chapter-15-probability-exercise-15-1" },
            { type: "Ex 15.2", url: "chapter-15-probability-exercise-15-2" },
          ]
        }
      ];

  const weightage = [
    { unit: "Number Systems", marks: 6 },
    { unit: "Algebra", marks: 20 },
    { unit: "Coordinate Geometry", marks: 6 },
    { unit: "Geometry", marks: 15 },
    { unit: "Trigonometry", marks: 12 },
    { unit: "Mensuration", marks: 10 },
    { unit: "Statistics and Probability", marks: 11 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="scroll-m-20 text-lg font-bold tracking-tight  mb-4">
          NCERT Solutions for Class 10 Maths
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Solved by experts to help you score excellent marks in board exams. All questions from CBSE NCERT Books included with step-by-step solutions.
        </p>
        
        <div className="prose max-w-none mb-8">
          <p>
            CBSE NCERT Solutions for Class 10 Maths in PDF in Hindi Medium (हिंदी मीडियम) as well as English Medium 
            for CBSE, UP Board, Gujrat Board, MP Board, Bihar, AP SSC, TS SSC, Uttarakhand board and all other boards following new CBSE Curriculum.
          </p>
          <p>
            With the aim of imbibing skills and hard work among students, these solutions contain previous years' questions 
            along with answers (except those not in current syllabus).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Chapter {chapter.id}: {chapter.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {chapter.exercises} Exercises • {chapter.problems} Problems
                </p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{chapter.description}</p>
                <div className="flex flex-wrap gap-2">
                  {chapter.resources.map((resource, idx) => (
                    <Button asChild variant="outline" size="sm" key={idx}>
                      <Link href={resource.url}>{resource.type}</Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-6">
          CBSE Class 10 Maths Unit-wise Weightage
        </h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-2 text-left">Unit No</th>
                <th className="px-4 py-2 text-left">Name of the Unit</th>
                <th className="px-4 py-2 text-left">Marks</th>
              </tr>
            </thead>
            <tbody>
              {weightage.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-secondary'}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{item.unit}</td>
                  <td className="px-4 py-2">{item.marks}</td>
                </tr>
              ))}
              <tr className="bg-primary text-primary-foreground font-medium">
                <td className="px-4 py-2" colSpan={2}>Total</td>
                <td className="px-4 py-2">80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-6">
          FAQs
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-lg">How to master in Class 10 Maths CBSE?</h3>
            <p className="text-muted-foreground">
              Students can master Class 10 Maths by thoroughly studying NCERT Solutions and practicing all exercises. 
              Regular revision of formulas and concepts is key to scoring well.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg">Is NCERT enough for Class 10 boards Maths?</h3>
            <p className="text-muted-foreground">
              Yes, NCERT textbook and solutions are sufficient for board exams. For additional practice, students can 
              refer to RD Sharma or RS Aggarwal for more challenging problems.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">Which chapters carry the most weightage?</h3>
            <p className="text-muted-foreground">
              Algebra (20 marks), Geometry (15 marks), and Trigonometry (12 marks) carry the highest weightage in 
              Class 10 Maths board exams.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-6">
          Additional Resources
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Button asChild variant="secondary">
            <Link href="/rd-sharma-class-10">RD Sharma Solutions</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="-exercisetra-questions">Extra Questions</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/sample-papers">Sample Papers</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/formulas">Maths Formulas</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}