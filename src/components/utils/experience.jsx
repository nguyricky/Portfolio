import { ArrowRight02Icon, ArrowUpRight01Icon } from "hugeicons-react";

const Experience = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <section>
        <h2 className="text-xl font-medium mb-6">experience</h2>
        <ul className="space-y-8">
          <li>
            <h3 className="text-md font-sans text-[#0a0f15] underline underline-offset-4">
              karman space & defense
            </h3>
            <p className="text-md text-[#0a0f15] opacity-85 mt-2">
              full stack software enginner intern
            </p>
            <p className="text-sm text-[#0a0f15] opacity-85 mb-2">(sept. 2024 - present)</p>
            <p className="text-md text-[#0a0f15] opacity-60">
              leading development for a large-scale in-house real time manufacturing tracking system
            </p>
          </li>
          <li>
            <h3 className="text-md font-sans text-[#0a0f15] underline underline-offset-4">
              oregon state university - college of business
            </h3>
            <p className="text-md text-[#0a0f15] opacity-85 mt-2">
              front-end & ai developer intern
            </p>
            <p className="text-sm text-[#0a0f15] opacity-85 mb-2">(march 2024 - june 2024)</p>
            <p className="text-md text-[#0a0f15] opacity-60">
              built an ai-powered web app to help students easily find resources
            </p>
          </li>
          <li>
            <h3 className="text-md font-sans text-[#0a0f15] underline underline-offset-4">
              captured sun
            </h3>
            <p className="text-md text-[#0a0f15] opacity-85 mt-2">software engineer intern</p>
            <p className="text-sm text-[#0a0f15] opacity-85 mb-2">(sept. 2023 - june 2024)</p>
            <p className="text-md text-[#0a0f15] opacity-60">
              co-developed a desktop app that streamlined workflows by combining fast local file
              access with seamless online sharing
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-6">projects</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-md font-sans text-[#0a0f15] underline underline-offset-4">
              <a
                href="https://github.com/nguyricky/smallsh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                smallsh
                <ArrowUpRight01Icon className="w-4 h-4 opacity-60 ml-1" />
              </a>
            </h3>
            <p className="text-md text-[#0a0f15] opacity-60 mt-2">
              implemenation of a shell written in c with a subset of features of well-known shells,
              such as bash
            </p>
          </li>
          <li>
            <h3 className="text-md font-sans text-[#0a0f15] underline underline-offset-4">
              <a
                href="https://github.com/nguyricky/MapReduce"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                map reduce
                <ArrowUpRight01Icon className="w-4 h-4 opacity-60 ml-1" />
              </a>
            </h3>
            <p className="text-md text-[#0a0f15] opacity-60 mt-2">
              rust-based multi-threading processing implemntation used to process and analyze large
              datasets efficiently, capable of data partitioning, mapping, and reducing
            </p>
          </li>
          <li>
            <h3 className="text-md font-sans text-[#0a0f15] underline underline-offset-4">
              <a
                href="https://github.com/nguyricky/keebtype"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                keebtype
                <ArrowUpRight01Icon className="w-4 h-4 opacity-60 ml-1" />
              </a>
            </h3>
            <p className="text-md text-[#0a0f15] opacity-60 mt-2">
              in development - a react based typing test web app
            </p>
          </li>
        </ul>
        <a href="https://github.com/nguyricky" className="inline-flex items-center text-md text-[#0a0f15] underline underline-offset-4 mt-8">
          more projects
          <ArrowRight02Icon className="w-4 h-4 ml-1" />
        </a>
      </section>
    </div>
  );
};

export default Experience;
