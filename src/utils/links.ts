const linkElementMap = {
    "rd-github": "https://github.com/madhav-fied",
    "rd-x": "https://x.com/Narasiman_",
    "rd-linkedin": "https://www.linkedin.com/in/narasiman-vasudevan-78b0b41a5/",
};

export const redirect = (where: string) => {
    window.open(linkElementMap[where], '_blank').focus();
}

export const downloadFile = (filePath, fileName) => {
    const anchor = document.createElement('a');
    anchor.href = filePath;
    anchor.download = fileName;
    anchor.setAttribute('type', 'application/pdf');
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

// downloadFile("/Narasiman_Resume.pdf", "Narasiman_Resume.pdf");