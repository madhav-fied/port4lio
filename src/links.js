const linkElementMap = {
    "rd-asyncio": "https://docs.python.org/3/library/asyncio.html", 
    "rd-cypress": "https://github.com/cypress-io/cypress", 
    "rd-docker": "https://www.docker.com/", 
    "rd-express": "https://github.com/expressjs/express", 
    "rd-fastapi": "https://github.com/fastapi/fastapi", 
    "rd-gha": "https://github.com/features/actions", 
    "rd-github": "https://github.com/madhav-fied", 
    "rd-jenkins": "https://www.jenkins.io/", 
    "rd-k8s": "https://kubernetes.io/", 
    "rd-langchain": "https://github.com/langchain-ai/langchain", 
    "rd-langgraph": "https://github.com/langchain-ai/langgraph", 
    "rd-linkedin": "https://www.linkedin.com/in/narasiman-vasudevan-78b0b41a5/", 
    "rd-pnpm": "https://github.com/pnpm/pnpm", 
    "rd-podman": "https://podman.io/", 
    "rd-postgres": "https://www.postgresql.org/", 
    "rd-pydantic": "https://github.com/pydantic/pydantic", 
    "rd-pytest": "https://docs.pytest.org/en/stable/", 
    "rd-react": "https://react.dev/", 
    "rd-socketio": "https://github.com/socketio/socket.io",
};

Object.keys(linkElementMap).forEach((key) => {
    const elements = document.querySelectorAll(`#${key}`);
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            window.open(linkElementMap[key], '_blank').focus();
        });
    });
});
