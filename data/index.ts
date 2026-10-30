import siteData from "./site.json";

// Types
export type RawSiteData = typeof siteData;
export type DriveLearnSchema = typeof siteData.DriveLearn;
export type DriveLearnSections = DriveLearnSchema["sections"];
export type DriveLearnTemplateComponents = DriveLearnSchema["templateComponents"];

// Types
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// Section Data Types
export type DriveLearnTopbarData = DriveLearnSections["topbar"]["variants"]["DriveLearnTopbar1"];
export type DriveLearnNavbarData = DriveLearnSections["navbar"]["variants"]["DriveLearnNavbar1"];
export type DriveLearnFooterData = DriveLearnSections["footer"]["variants"]["DriveLearnFooter1"];
export type DriveLearnHeroData = DriveLearnSections["hero"]["variants"]["DriveLearnHero1"];
export type DriveLearnAboutData = DriveLearnSections["about"]["variants"]["DriveLearnAbout1"];
export type DriveLearnServicesData = DriveLearnSections["services"]["variants"]["DriveLearnServices1"];
export type DriveLearnWhyChooseUsData = DriveLearnSections["whyChooseUs"]["variants"]["DriveLearnWhyChooseUs1"];
export type DriveLearnStatsData = DriveLearnSections["stats"]["variants"]["DriveLearnStats1"];
export type DriveLearnTestimonialData = DriveLearnSections["testimonial"]["variants"]["DriveLearnTestimonial1"];
export type DriveLearnFaqData = DriveLearnSections["faqs"]["variants"]["DriveLearnFaq1"];

// Item Types
export type NavItem = DriveLearnNavbarData["navLinks"][number];
export type HeroSlide = DriveLearnHeroData["slides"][number];
export type ServiceItem = DriveLearnServicesData["courseList"][number];
export type WhyChooseUsItem = DriveLearnWhyChooseUsData["leftFeatures"][number];
export type StatItem = DriveLearnStatsData["statsList"][number];
export type TestimonialItem = DriveLearnTestimonialData["testimonials"][number];
export type FaqItem = DriveLearnFaqData["faqList"][number];

// Location
const sec = siteData.DriveLearn.sections;

export const siteMap = {
  topbar: sec.topbar.variants.DriveLearnTopbar1,
  navbar: sec.navbar.variants.DriveLearnNavbar1,
  footer: sec.footer.variants.DriveLearnFooter1,
  hero: sec.hero.variants.DriveLearnHero1,
  about: sec.about.variants.DriveLearnAbout1,
  services: sec.services.variants.DriveLearnServices1,
  whyChooseUs: sec.whyChooseUs.variants.DriveLearnWhyChooseUs1,
  stats: sec.stats.variants.DriveLearnStats1,
  testimonial: sec.testimonial.variants.DriveLearnTestimonial1,
  faqs: sec.faqs.variants.DriveLearnFaq1,

  // Compatibility
  topbarData: sec.topbar.variants.DriveLearnTopbar1,
  navbarData: sec.navbar.variants.DriveLearnNavbar1,
  footerData: sec.footer.variants.DriveLearnFooter1,
  heroData: sec.hero.variants.DriveLearnHero1,
  aboutData: sec.about.variants.DriveLearnAbout1,
  servicesData: sec.services.variants.DriveLearnServices1,
  whyChooseUsData: sec.whyChooseUs.variants.DriveLearnWhyChooseUs1,
  statsData: sec.stats.variants.DriveLearnStats1,
  testimonialData: sec.testimonial.variants.DriveLearnTestimonial1,
  faqsData: sec.faqs.variants.DriveLearnFaq1,

  // Root
  DriveLearn: siteData.DriveLearn,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default siteData;
