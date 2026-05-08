const linkElementMap: Record<string, string> = {
    "rd-github": "https://github.com/madhav-fied",
    "rd-x": "https://x.com/Narasiman_",
    "rd-linkedin": "https://www.linkedin.com/in/narasiman-vasudevan-78b0b41a5/",
    "rd-proj-cards": "https://github.com/madhav-fied/cards-online",
    "rd-proj-clib": "https://github.com/madhav-fied/clib",
    "rd-proj-quick-links": "https://github.com/madhav-fied/quick-links",
};

const rd_broken = "https://http.cat/status/404"

export const redirect = (where: string) => {
    if (linkElementMap[where]) {
        window.open(linkElementMap[where], '_blank')?.focus();
    } else {
        window.open(rd_broken, '_blank')?.focus();
    }
}

export const downloadFile = (filePath: string, fileName: string) => {
    const anchor = document.createElement('a');
    anchor.href = filePath;
    anchor.download = fileName;
    anchor.setAttribute('type', 'application/pdf');
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

// downloadFile("/Narasiman_Resume.pdf", "Narasiman_Resume.pdf");