const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ctemp48.github.io/',
  title: 'CT.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Christian Templin',
  role: 'AI Engineer',
  description:
    'I am currently studying at Stevens Institute of Technology where I am pursuing a masters degree in Applied Artificial Intelligence. I also obtained my bachelors degree in computer engineering at Stevens. At Stevens, I was a member of the varsity track and field team as well as an active member of the Theta Xi fraternity. Upon graduating, it is my goal to pursue a career in artificial intelligence. Specifically, I am passionate about building and testing deep learning models for all kinds of different applications, as well as building apps that leverage such models.',
  resume: 'https://drive.google.com/file/d/1tsHzTgN5RZA_oBQBaSmHTeLyx5DvObvz/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/christiantemplin',
    github: 'https://github.com/ctemp48',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Generative Spatial Audio Diffusion Model',
    description:
      'Ongoing research to develop a text-to-audio model which generates first order ambisonics spatial audio.',
    stack: ['PyTorch'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'About Me Chatbot',
    description:
      'Chatbot utilizing RAG to answer questions pertaining to who I am.',
    stack: ['LangChain', 'ChromaDB', 'Streamlit'],
    sourceCode: 'https://github.com/ctemp48/bioChatBot',
    livePreview: 'https://ctemp48-biochatbot-streamlitui-79wvue.streamlit.app/',
  },
  {
    name: 'Llama 3.2 3B Fine Tuning',
    description:
      'Fine tuned Llama 3.2 3B to improve domain specific finance knowledge.',
    stack: ['Hugging Face'],
    sourceCode: 'https://github.com/ctemp48/Llama3.2Finance',
    livePreview: 'https://huggingface.co/ctemplin/Llama3.2-3B-Finance',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'C++',
  'PyTorch',
  'TensorFlow/Keras',
  'Pandas',
  'NumPy',
  'SQL',
  'Git',
  'OpenCV',
  'Docker',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ctemplin@stevens.edu',
}

export { header, about, projects, skills, contact }
