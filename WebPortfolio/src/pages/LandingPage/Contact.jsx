import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS config: substitua pelos seus dados
    const serviceID = 'service_ftzxbyo';
    const templateID = 'template_ma3vy28';
    const userID = 'tYIHci-2977XcxHsg';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        alert('Mensagem enviada com sucesso!');
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert('Erro ao enviar mensagem. Tente novamente.');
      });
  };

  const { t } = useTranslation();
  return (
    <>
      {/* Contact Section */}
      <section id='contact' className='scroll-my-20 pt-12 md:pt-16 pb-12 md:pb-16 bg-indigo-600 px-4 sm:px-6 md:px-8 lg:px-64'>
        <div className='w-full mx-auto'>
          {/* Header */}
          <div className='text-center mb-8 md:mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4'>{t('contact.title')}</h2>
            <p className='text-base md:text-lg text-white/90 max-w-2xl mx-auto'>
              {t('contact.description')}
            </p>
          </div>

          {/* Contact Content */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto'>
            
            {/* Contact Information */}
            <div className='space-y-6'>
              <div>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-4'>{t('contact.connectTitle')}</h3>
                <p className='text-white/80 mb-6 text-sm md:text-base'>
                  {t('contact.connectDescription')}
                </p>
              </div>

              {/* Contact Items */}
              <div className='space-y-4'>
                <div className='flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300'>
                  <div className='flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center'>
                    <FaEnvelope className='w-4 h-4 text-white' />
                  </div>
                  <div>
                    <p className='text-white font-medium text-sm'>{t('contact.info.email')}</p>
                    <p className='text-white/80 text-xs'>stephanieguimaraes7@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300'>
                  <div className='flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center'>
                    <FaPhone className='w-4 h-4 text-white' />
                  </div>
                  <div>
                    <p className='text-white font-medium text-sm'>{t('contact.info.phone')}</p>
                    <p className='text-white/80 text-xs'>+55 (62) 982149782</p>
                  </div>
                </div>

                <div className='flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300'>
                  <div className='flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center'>
                    <FaMapMarkerAlt className='w-4 h-4 text-white' />
                  </div>
                  <div>
                    <p className='text-white font-medium text-sm'>{t('contact.info.location')}</p>
                    <p className='text-white/80 text-xs'>Goiânia, GO - Brazil</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className='pt-4'>
                <h4 className='text-white font-medium mb-3 text-sm'>{t('contact.info.follow')}</h4>
                <div className='flex space-x-3'>
                  <a href="https://www.linkedin.com/in/stephanie-guimaraes-319306107/" target="_blank" rel="noopener noreferrer" className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300'>
                    <FaLinkedin className='w-4 h-4 text-white' />
                  </a>
                  <a href="https://github.com/StephanieGuimaraes" target="_blank" rel="noopener noreferrer" className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300'>
                    <FaGithub className='w-4 h-4 text-white' />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/20'>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-4 md:mb-6'>{t('contact.form.title')}</h3>
              
              <form onSubmit={handleSubmit} className='space-y-4'>
                {/* Name Field */}
                <div>
                  <label className='block text-white font-medium mb-2' htmlFor='name'>
                    <FaUser className='inline w-4 h-4 mr-2' />
                    {t('contact.form.name')}
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300'
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className='block text-white font-medium mb-2' htmlFor='email'>
                    <FaEnvelope className='inline w-4 h-4 mr-2' />
                    {t('contact.form.email')}
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300'
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className='block text-white font-medium mb-2' htmlFor='subject'>
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300'
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className='block text-white font-medium mb-2' htmlFor='message'>
                    <FaComment className='inline w-4 h-4 mr-2' />
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows='4'
                    className='w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 resize-none'
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-white/30 text-white/70 cursor-not-allowed' 
                      : 'bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span>{t('contact.form.sending')}</span>
                  ) : (
                    <>
                      <FaPaperPlane className='w-4 h-4' />
                      <span>{t('contact.form.send')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-64'>
        <div className='w-full mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
            
            {/* Brand */}
            <div className='space-y-4'>
              <h3 className='text-xl md:text-2xl font-bold'> Stephanie Guimarães Portfolio</h3>
              <p className='text-gray-400 leading-relaxed'>
                Passionate developer creating innovative solutions and bringing ideas to life through code.
              </p>
              <div className='flex space-x-4'>
                <a href="https://www.linkedin.com/in/stephanie-guimaraes-319306107/" target="_blank" className='w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-colors duration-300'>
                  <FaLinkedin className='w-5 h-5' />
                </a>
                <a href="https://github.com/StephanieGuimaraes" target="_blank" className='w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-colors duration-300'>
                  <FaGithub className='w-5 h-5' />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className='space-y-4'>
              <h4 className='text-lg font-semibold'>Quick Links</h4>
              <ul className='space-y-2 text-gray-400'>
                <li><a href="#home" className='hover:text-white transition-colors duration-300'>Home</a></li>
                <li><a href="#skills" className='hover:text-white transition-colors duration-300'>Skills</a></li>
                <li><a href="#projects" className='hover:text-white transition-colors duration-300'>Projects</a></li>
                <li><a href="#contact" className='hover:text-white transition-colors duration-300'>Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className='space-y-4'>
              <h4 className='text-lg font-semibold'>Contact Info</h4>
              <ul className='space-y-3 text-gray-400'>
                <li className='flex items-center space-x-3'>
                  <FaEnvelope className='w-4 h-4 text-indigo-400' />
                  <span>stephanieguimaraes7@gmail.com</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <FaPhone className='w-4 h-4 text-indigo-400' />
                  <span>+55 (62) 982149782</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <FaMapMarkerAlt className='w-4 h-4 text-indigo-400' />
                  <span>Goiânia, GO - Brazil</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='border-t border-gray-800 mt-6 md:mt-8 pt-6 text-center'>
            <p className='text-gray-400'>
              © 2025 Stephanie Guimarães Portfolio. Built with React & Tailwind CSS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact