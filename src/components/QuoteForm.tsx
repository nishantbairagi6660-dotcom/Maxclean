import React, { useState, useEffect } from 'react';
import {
  Send,
  MessageCircle,
  Phone,
  CheckCircle,
  AlertCircle,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO, ALL_SERVICES } from '../data/constants';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { QuoteFormData } from '../types';

interface QuoteFormProps {
  initialService?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialService }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].quoteForm;
  const servicesList = [
    ...TRANSLATIONS[language].services.coreItems,
    ...TRANSLATIONS[language].services.additionalItems,
  ];

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'House',
    service: initialService || servicesList[0].title,
    preferredDate: '',
    frequency: 'One-Time',
    location: '',
    additionalDetails: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState<string>('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.errors.fullName;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.errors.phone;
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = t.errors.phoneInvalid;
    }

    if (!formData.location.trim()) {
      newErrors.location = t.errors.location;
    }

    if (!formData.consent) {
      newErrors.consent = t.errors.consent;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = (data: QuoteFormData): string => {
    const isEl = language === 'el';
    return [
      isEl
        ? `Γεια σας Maxclean, θα ήθελα να ζητήσω μια προσφορά καθαρισμού:`
        : `Hello Maxclean, I would like to request a cleaning quote:`,
      `• ${isEl ? 'Όνομα' : 'Name'}: ${data.fullName}`,
      `• ${isEl ? 'Τηλέφωνο' : 'Phone'}: ${data.phone}`,
      data.email ? `• Email: ${data.email}` : null,
      `• ${isEl ? 'Τύπος Ακινήτου' : 'Property Type'}: ${data.propertyType}`,
      `• ${isEl ? 'Υπηρεσία' : 'Service'}: ${data.service}`,
      `• ${isEl ? 'Συχνότητα' : 'Frequency'}: ${data.frequency}`,
      `• ${isEl ? 'Περιοχή στην Πάφο' : 'Location in Paphos'}: ${data.location}`,
      data.preferredDate ? `• ${isEl ? 'Επιθυμητή Ημερομηνία' : 'Preferred Date'}: ${data.preferredDate}` : null,
      data.additionalDetails ? `• ${isEl ? 'Σημειώσεις' : 'Notes'}: ${data.additionalDetails}` : null,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const message = generateWhatsAppMessage(formData);
    const waLink = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    setWhatsAppUrl(waLink);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      try {
        localStorage.setItem('maxclean_last_quote', JSON.stringify({ ...formData, timestamp: Date.now() }));
      } catch (err) {
        // ignore
      }
    }, 500);
  };

  const handleDirectWhatsApp = () => {
    if (!validate()) return;
    const message = generateWhatsAppMessage(formData);
    const waLink = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setSubmitSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      propertyType: 'House',
      service: servicesList[0].title,
      preferredDate: '',
      frequency: 'One-Time',
      location: '',
      additionalDetails: '',
      consent: false,
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#17243A] to-[#121c2e] text-white relative overflow-hidden">
      {/* Background soft ambient shapes */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 rounded-full bg-[#4F8FEF]/15 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 rounded-full bg-[#6BA5F5]/10 pointer-events-none" />

      <div id="quote" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-[#6BA5F5] font-display">
              <span>{t.kicker}</span>
              <span aria-hidden="true">·</span>
              <span>Paphos, Cyprus</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white font-display">
              {t.title}
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              {t.subtitle}
            </p>

            {/* Direct Quick Contact Options */}
            <div className="pt-4 space-y-3.5">
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all hover:translate-x-1"
              >
                <div className="w-11 h-11 rounded-xl bg-[#4F8FEF] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/70">{t.instantChat}</p>
                  <p className="text-sm font-bold text-white font-display">{t.instantChatTitle}</p>
                </div>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all hover:translate-x-1"
              >
                <div className="w-11 h-11 rounded-xl bg-white text-[#17243A] flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-[#4F8FEF]" />
                </div>
                <div>
                  <p className="text-xs text-white/70">{t.phoneTitle}</p>
                  <p className="text-sm font-bold text-white font-display">{BUSINESS_INFO.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 text-[#6BA5F5] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white/70">{t.hubTitle}</p>
                  <p className="text-xs sm:text-sm font-medium text-white/90">{BUSINESS_INFO.address}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-white/50" />
              </a>
            </div>

            {/* Transparent Note */}
            <div className="text-xs text-white/70 pt-2">
              <p>{t.transparentNote}</p>
            </div>
          </div>

          {/* Right Column: Quote Form Card in White with Rounded Corners */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-9 text-[#17243A] shadow-2xl border border-white/20">
              {submitSuccess ? (
                <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#EAF4FF] text-[#4F8FEF] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#17243A] font-display">
                    {t.successTitle}
                  </h3>

                  <p className="text-sm text-[#667085] max-w-md mx-auto leading-relaxed">
                    {t.successSub(formData.fullName, formData.service, formData.location)}
                  </p>

                  <div className="p-5 rounded-2xl bg-[#EAF4FF]/50 border border-[#E5EDF7] text-left text-xs space-y-1.5 max-w-md mx-auto">
                    <p className="font-bold text-[#17243A] font-display">{t.summaryTitle}</p>
                    <p><span className="text-[#667085]">{t.propertyLabel}</span> {formData.propertyType} ({formData.frequency})</p>
                    <p><span className="text-[#667085]">{t.serviceLabel}</span> {formData.service}</p>
                    <p><span className="text-[#667085]">{t.locationLabel}</span> {formData.location}</p>
                    {formData.preferredDate && <p><span className="text-[#667085]">{t.dateLabel}</span> {formData.preferredDate}</p>}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-[#4F8FEF] hover:bg-[#3d7fdc] rounded-full shadow-md transition-all font-display"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t.sendWaBtn}</span>
                    </a>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-[#17243A] hover:bg-[#EAF4FF] rounded-full transition-colors font-display"
                    >
                      {t.anotherRequestBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="border-b border-[#E5EDF7] pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#17243A] font-display">{t.cardTitle}</h3>
                    <p className="text-xs text-[#667085] mt-0.5">
                      {t.cardSubtitle}
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-[#17243A] mb-1 font-display">
                        {t.fullName} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={t.fullNamePlaceholder}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#17243A] bg-[#FAFAF7] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4F8FEF] transition-all ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5EDF7]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#17243A] mb-1 font-display">
                        {t.phone} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.phonePlaceholder}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#17243A] bg-[#FAFAF7] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4F8FEF] transition-all ${
                          errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5EDF7]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#17243A] mb-1 font-display">
                        {t.email} <span className="text-xs text-[#667085] font-normal">{t.emailOptional}</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5EDF7] text-sm text-[#17243A] bg-[#FAFAF7] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4F8FEF] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-xs font-bold text-[#17243A] mb-1 font-display">
                        {t.location} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder={t.locationPlaceholder}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#17243A] bg-[#FAFAF7] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4F8FEF] transition-all ${
                          errors.location ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5EDF7]'
                        }`}
                      />
                      {errors.location && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Property Type & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="propertyType" className="block text-xs font-bold text-[#17243A] mb-1 font-display">
                        {t.propertyType}
                      </label>
                      <select
                        id="propertyType"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5EDF7] text-sm text-[#17243A] bg-[#FAFAF7] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4F8FEF] transition-all"
                      >
                        {t.propertyTypes.map((pt) => (
                          <option key={pt.value} value={pt.value}>
                            {pt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-[#17243A] mb-1 font-display">
                        {t.service}
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5EDF7] text-sm text-[#17243A] bg-[#FAFAF7] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4F8FEF] transition-all"
                      >
                        {servicesList.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Frequency & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="frequency" className="block text-xs font-bold text-[#17243A] mb-1 font-display">
                        {t.frequency}
                      </label>
                      <select
                        id="frequency"
                        value={formData.frequency}
                        onChange={(e) => setFormData({ ...formData, frequency: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5EDF7] text-sm text-[#17243A] bg-[#FAFAF7] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4F8FEF] transition-all"
                      >
                        {t.frequencies.map((freq) => (
                          <option key={freq.value} value={freq.value}>
                            {freq.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-bold text-[#17243A] mb-1 font-display">
                        {t.preferredDate} <span className="text-xs text-[#667085] font-normal">{t.optional}</span>
                      </label>
                      <input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5EDF7] text-sm text-[#17243A] bg-[#FAFAF7] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4F8FEF] transition-all"
                      />
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div>
                    <label htmlFor="additionalDetails" className="block text-xs font-bold text-[#17243A] mb-1 font-display">
                      {t.additionalDetails}
                    </label>
                    <textarea
                      id="additionalDetails"
                      rows={3}
                      value={formData.additionalDetails}
                      onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                      placeholder={t.additionalDetailsPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E5EDF7] text-sm text-[#17243A] bg-[#FAFAF7] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4F8FEF] transition-all resize-y"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-[#4F8FEF] focus:ring-[#4F8FEF] border-[#E5EDF7] cursor-pointer"
                      />
                      <span className="text-xs text-[#667085] leading-snug">
                        {t.consentText} <span className="text-rose-500">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Form Submission Buttons */}
                  <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#4F8FEF] hover:bg-[#3d7fdc] rounded-full shadow-md hover:shadow transition-all disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-[#4F8FEF] font-display"
                    >
                      {isSubmitting ? (
                        <span>{t.submittingBtn}</span>
                      ) : (
                        <>
                          <span>{t.submitBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#17243A] bg-[#EAF4FF] hover:bg-[#dceeff] rounded-full transition-all border border-[#E5EDF7] font-display"
                    >
                      <MessageCircle className="w-4 h-4 text-[#4F8FEF]" />
                      <span>{t.prefillWaBtn}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-[#667085] pt-1">
                    {t.directNote}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
