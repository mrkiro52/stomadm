import './Services.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Services() {
    localStorage.setItem('page', 'services');
    const { t } = useTranslation();

    // Все 22 услуги с их данными
    const services = [
        {
            title: t('service_filling_title'),
            description: t('service_filling_description'),
            slug: 'filling',
            image: require('../ServiceFilling/images/smile.jpg')
        },
        {
            title: t('service_teeth_cleaning_title'),
            description: t('service_teeth_cleaning_description'),
            slug: 'teeth-cleaning',
            image: require('../ServiceTeethCleaning/images/smile.jpg')
        },
        {
            title: t('service_teeth_whitening_title'),
            description: t('service_teeth_whitening_description'),
            slug: 'teeth-whitening',
            image: require('../ServiceTeethWhitening/images/smile.jpg')
        },
        {
            title: t('service_e_max_veneers_title'),
            description: t('service_e_max_veneers_description'),
            slug: 'e-max-veneers',
            image: require('../ServiceEmaxVeneers/images/smile.jpg')
        },
        {
            title: t('service_e_max_crown_title'),
            description: t('service_e_max_crown_description'),
            slug: 'e-max-crown',
            image: require('../ServiceEmaxCrown/images/smile.jpg')
        },
        {
            title: t('service_gingivoplasty_title'),
            description: t('service_gingivoplasty_description'),
            slug: 'gingivoplasty',
            image: require('../ServiceGingivoplasty/images/smile.jpg')
        },
        {
            title: t('service_botox_title'),
            description: t('service_botox_description'),
            slug: 'botox',
            image: require('../ServiceBotox/images/smile.jpg')
        },
        {
            title: t('service_zirconia_crown_on_tooth_title'),
            description: t('service_zirconia_crown_on_tooth_description'),
            slug: 'zirconia-crown-on-tooth',
            image: require('../ServiceZirconiaCrownOnTooth/images/smile.jpg')
        },
        {
            title: t('service_zirconia_crown_on_implant_title'),
            description: t('service_zirconia_crown_on_implant_description'),
            slug: 'zirconia-crown-on-implant',
            image: require('../ServiceZirconiaCrownOnImplant/images/smile.jpg')
        },
        {
            title: t('service_bone_grafting_title'),
            description: t('service_bone_grafting_description'),
            slug: 'bone-grafting',
            image: require('../ServiceBoneGrafting/images/smile.jpg')
        },
        {
            title: t('service_sinus_lifting_title'),
            description: t('service_sinus_lifting_description'),
            slug: 'sinus-lifting',
            image: require('../ServiceSinusLifting/images/smile.jpg')
        },
        {
            title: t('service_piezolifting_title'),
            description: t('service_piezolifting_description'),
            slug: 'piezolifting',
            image: require('../ServicePiezolifting/images/smile.jpg')
        },
        {
            title: t('service_root_canal_treatment_title'),
            description: t('service_root_canal_treatment_description'),
            slug: 'root-canal-treatment',
            image: require('../ServiceRootCanalTreatment/images/smile.jpg')
        },
        {
            title: t('service_tooth_extraction_title'),
            description: t('service_tooth_extraction_description'),
            slug: 'tooth-extraction',
            image: require('../ServiceToothExtraction/images/smile.jpg')
        },
        {
            title: t('service_wisdom_tooth_extraction_title'),
            description: t('service_wisdom_tooth_extraction_description'),
            slug: 'wisdom-tooth-extraction',
            image: require('../ServiceWisdomToothExtraction/images/smile.jpg')
        },
        {
            title: t('service_cystectomy_title'),
            description: t('service_cystectomy_description'),
            slug: 'cystectomy',
            image: require('../ServiceCystectomy/images/smile.jpg')
        },
        {
            title: t('service_apicoectomy_title'),
            description: t('service_apicoectomy_description'),
            slug: 'apicoectomy',
            image: require('../ServiceApicoectomy/images/smile.jpg')
        },
        {
            title: t('service_flap_surgery_title'),
            description: t('service_flap_surgery_description'),
            slug: 'flap-surgery',
            image: require('../ServiceFlapSurgery/images/smile.jpg')
        },
        {
            title: t('service_curottage_title'),
            description: t('service_curottage_description'),
            slug: 'curottage',
            image: require('../ServiceCurottage/images/smile.jpg')
        },
        {
            title: t('service_braces_title'),
            description: t('service_braces_description'),
            slug: 'braces',
            image: require('../ServiceBraces/images/smile.jpg')
        },
        {
            title: t('service_aligners_title'),
            description: t('service_aligners_description'),
            slug: 'aligners',
            image: require('../ServiceAligners/images/smile.jpg')
        },
        {
            title: t('service_night_guard_title'),
            description: t('service_night_guard_description'),
            slug: 'night-guard',
            image: require('../ServiceNightGuard/images/smile.jpg')
        }
    ];

    return (
        <div className="Services">
            <Header />
            
            <div className="services-hero">
                <div className="container">
                    <h1>{t('services_page_title')}</h1>
                    <p>{t('services_page_subtitle')}</p>
                </div>
            </div>

            <div className="services-grid">
                <div className="container">
                    <div className="grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <Link to={`/service/${service.slug}`} className="service-button">
                                        {t('services_button')}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Form />
            <Footer />
        </div>
    );
}