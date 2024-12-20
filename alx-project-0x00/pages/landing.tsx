import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div className="bg-slate-600">
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button title="small" styles="px-3 py-2  rounded-sm bg-blue-600 text-white mx-2" />
            <Button title="medium" styles="px-6 py-3 rounded-md bg-orange-600 text-white mx-2" />
            <Button title="large" styles="px-10 py-4 rounded-lg bg-green-800 text-white mx-2" />
        </div>
    )
}

export default Landing