import { TextInput, Button } from "@mantine/core";

const Subscribe = () =>
{
    return <div className="mt-20 flex items-center bg-cyan-900 mx-20 py-3 rounded-xl justify-around">
        <div className="text-4xl w-2/5 text-center font-semibold text-cyan-100">Never Want to Miss Any <span className="text-tulip-tree-400">Job News? </span></div>
        <div className="flex gap-4 rounded-xl bg-cyan-700 px-3 py-2 items-center">
            <TextInput
             className="[&_input]:text-cyan-100 font-semibold"
             variant="unstyled"
             placeholder="your@email.com"
             size="xl"
            />
            <Button className="!rounded-lg" size="lg" color="tulip-tree.4" variant="filled">Subscribe</Button>
        </div>
    </div>
}
export default Subscribe;