'use client';

import { useState, FormEvent } from 'react';
import styles from './ConsultationForm.module.css';

export default function ConsultationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    location: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleConfirm = () => {
    alert('Booking submitted! (Integration needed)');
  };

  const getStepDotClass = (step: number) => {
    if (currentStep === step) return `${styles.stepDot} ${styles.stepDotActive}`;
    if (currentStep > step) return `${styles.stepDot} ${styles.stepDotCompleted}`;
    return styles.stepDot;
  };

  const getStepClass = (step: number) => {
    if (currentStep === step) return `${styles.formStep} ${styles.stepActive}`;
    if (currentStep > step) return `${styles.formStep} ${styles.stepLeft}`;
    return `${styles.formStep} ${styles.stepRight}`;
  };

  return (
    <section className={styles.formSection} id="contact">
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Get Started</h2>
          <p className={styles.formSubtitle}>Book a free consultation to discuss your project</p>
        </div>

        <div className={styles.formCard}>
          <div className={styles.stepIndicator}>
            <div className={getStepDotClass(1)}>1</div>
            <div className={styles.stepLine}></div>
            <div className={getStepDotClass(2)}>2</div>
          </div>

          <div className={styles.formContent}>
            {/* Step 1: Contact Information */}
            <div className={getStepClass(1)}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.input}
                    required
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    rows={3}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.radioGroup}`}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="location"
                      value="nearby"
                      checked={formData.location === 'nearby'}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                    <span className={styles.radioText}>I live within 30 minutes of Palo Alto</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="location"
                      value="far"
                      checked={formData.location === 'far'}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                    <span className={styles.radioText}>I live further than 30 minutes but it&apos;s worth the drive!</span>
                  </label>
                </div>

                <button type="submit" className={styles.submitButton}>Continue to Booking</button>
              </form>
            </div>

            {/* Step 2: Calendar */}
            <div className={getStepClass(2)}>
              <div className={styles.calendarPlaceholder}>
                <div className={styles.calendarHeader}>
                  <h3 className={styles.calendarTitle}>Select Your Preferred Date</h3>
                  <p className={styles.calendarSubtitle}>Choose a convenient time for your consultation</p>
                </div>

                <div className={styles.calendarGrid}>
                  <div className={styles.calendarInfo}>
                    Calendar component will be integrated here
                  </div>
                </div>

                <div className={styles.calendarActions}>
                  <button type="button" className={styles.backButton} onClick={handleBack}>
                    Back
                  </button>
                  <button
                    type="button"
                    className={`${styles.submitButton} ${styles.confirmButton}`}
                    onClick={handleConfirm}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
