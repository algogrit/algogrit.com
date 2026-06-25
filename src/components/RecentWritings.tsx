import BlogPosts from "./BlogPosts";

export default function RecentWriting() {
  return (
    <section id="writing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
          <h2 className="display text-5xl md:text-6xl font-bold">
            Recent<br />
            <span className="grad">Writing.</span>
          </h2>

          <div className="flex gap-5 items-center text-sm">
            <a
              href="https://blog.algogrit.com/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white font-semibold items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
              </svg>
              RSS
            </a>
            <a
              href="https://blog.algogrit.com/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="grad font-semibold hover:underline"
            >
              View all posts →
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <BlogPosts />
        </div>
      </div>
    </section>
  );
}
