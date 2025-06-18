const ProjectCard = ({ project }) => {
    const formatURL = (url) =>
        url?.startsWith('http://') || url?.startsWith('https://') ? url : `https://${url}`;

    return (
        <div className="border border-gray-700 bg-gray-800/50 h-full flex flex-col">
            {/* Project Image */}
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                />
            )}

            {/* Technologies */}
            <div className="p-4 border-t border-gray-700 bg-gray-800/80">
                <div className="flex flex-wrap gap-2 mb-3">
                    {(project.technologies || []).map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Title and Description */}
            <div className="p-4 flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            </div>

            {/* Links Section */}
            <div className="p-4 pt-0 flex flex-wrap gap-3">
                {project.liveURL && (
                    <a
                        href={formatURL(project.liveURL)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-purple-400 text-purple-400 px-4 py-1 text-sm hover:bg-purple-400 hover:text-gray-900 transition-colors flex items-center"
                    >
                        Live <span className="ml-1">{'<~>'}</span>
                    </a>
                )}

                {project.cachedURL && (
                    <a
                        href={formatURL(project.cachedURL)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-400 text-gray-400 px-4 py-1 text-sm hover:bg-gray-400 hover:text-gray-900 transition-colors flex items-center"
                    >
                        Cached <span className="ml-1">{'>'}</span>
                    </a>
                )}

                {project.githubURL && (
                    <a
                        href={formatURL(project.githubURL)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-purple-400 text-purple-400 px-4 py-1 text-sm hover:bg-purple-400 hover:text-gray-900 transition-colors flex items-center"
                    >
                        GitHub <span className="ml-1">{'<~>'}</span>
                    </a>
                )}

                {project.figmaURL && (
                    <a
                        href={formatURL(project.figmaURL)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-purple-400 text-purple-400 px-4 py-1 text-sm hover:bg-purple-400 hover:text-gray-900 transition-colors flex items-center"
                    >
                        Figma <span className="ml-1">{'<~>'}</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
