import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  el: {
    translation: {
      "site_name": "ΕΛΛΗΝΙΚΟ ΚΤΗΜΑΤΟΛΟΓΙΟ",
      "site_slogan": "Πύλη ανοιχτών δεδομένων",
      "menu_home": "Αρχική",
      "menu_datasets": "Σύνολα δεδομένων",
      "menu_publishers": "Εκδότες",
      "menu_about": "Ο Φορέας",
      "hero_title": "Κατάλογος Ανοιχτών Δεδομένων Ελληνικού Κτηματολογίου",
      "hero_intro": "Ο Φορέας παράγει πλήθος ανοικτών δεδομένων τα οποία είναι προσβάσιμα από τον κάθε ενδιαφερόμενο. Έχει δοθεί προτεραιότητα  σε δεδομένα που η ανοικτή διάθεση τους μπορεί να έχει προστιθέμενη αξία για τη δημόσια διοίκηση, την κοινωνία, την επιστημονική κοινότητα και την αγορά. Αποτελεί στρατηγική απόφαση του φορέα ο συνεχής εμπλουτισμός του σχετικού καταλόγου των δεδομένων για την περαιτέρω ενίσχυση της διαφάνειας και του ψηφιακού μετασχηματισμού της χώρας.",
      "submit_content": "Αναζήτηση",
      "topics": "Θεματικές ενότητες",
      "featured": "Πιο πρόσφατα",
      "sitename_footer": "ΕΛΛΗΝΙΚΟ ΚΤΗΜΑΤΟΛΟΓΙΟ",
      "footer_terms": "Όροι χρήσης",
      "footer_privacy": "Πολιτική απορρήτου",
      "footer_cookies": "Πολιτική cookies",
      "project_agency": "Ο Φορέας",
      "opendata_heading": "Ανοιχτά Δεδομένα Ελληνικού Κτηματολογίου",
      "project_heading": "Το έργο",
      "orgname": "Εκδότης",
      "identifier": "Αναγνωριστικό",
      "issued": "Δημιουργήθηκε",
      "modified": "Τελ. Ενημέρωση",
      "license": "Αδεια χρήσης δεδομένων",
      "contact_point": "Επικοινωνία",
      "access_level": "Πρόσβαση",
      "accrual_periodicity": "Περιοδικότητα",
      "tags": " ",
      "org_description": "Το Εθνικό Κτηματολόγιο είναι ένα ενιαίο και διαρκώς ενημερωμένο σύστημα καταγραφής νομικών, τεχνικών και άλλων πληροφοριών για τα ακίνητα, με την ευθύνη και την εγγύηση του Δημοσίου. Πρόκειται για ένα  πλήρως μηχανογραφημένο μητρώο με σημαντικές καινοτομίες και ηλεκτρονικές υπηρεσίες. Ο Φορέας παράγει πλήθος  δεδομένων τα οποία  είναι προσβάσιμα σε κάθε ενδιαφερόμενο. Η ανοικτή διάθεση τους γίνεται με  προτεραιότητα σ’ εκείνα με  προστιθέμενη αξία για τη δημόσια διοίκηση, την κοινωνία, την επιστημονική κοινότητα και την αγορά.",
      "available_info": "Η πληροφορία είναι διαθέσιμη και στο ",
      "table_title": "Σχετικές πληροφορίες",
      "table_th1": "Πεδίο",
      "table_th2": "Τιμή",
      "p10y": "Δεκαετία",
      "p4y": "Τετραετία",
      "p1y": "Ετήσιο",
      "p2m": "Δίμινο",
      "p35d": "Δύο φορές την εβδομάδα",
      "p1d": "Ημερήσιο",
      "p2w": "Ανά δύο εβδομάδες",
      "p6m": "Εξάμηνο",
      "p2y": "Διετία",
      "p3y": "Τριετία",
      "p033w": "Τρεις φορές την εβδομάδα",
      "p033m": "Τρεις φορές το μήνα",
      "pt1s": "Συνεχόμενα",
      "p1m": "Μινιαίο",
      "p3m": "Τρίμηνο",
      "p05m": "Δεκαπενθήμερο",
      "p4m": "Τετράμηνο",
      "p1w": "Ανά μία εβδομάδα",
      "pt1h": "Ανά μία ώρα",
      "terms_of_use": "Οροι χρήσης ιστοσελίδας",
      "org_value": "ΕΛΛΗΝΙΚΟ ΚΤΗΜΑΤΟΛΟΓΙΟ",
      "datasets": "Σύνολα δεδομένων",
      "type_here": "Πληκτρολογήστε εδώ",
      "facet_topics": "Θεματικές",
      "facet_tags": "Ετικέτες",
      "facet_publishers": "Εκδότες",
      "order_by": "Ταξινόμηση κατά",
      "order_date": "Ημερομηνία",
      "order_abc": "Αλφαβητικά",
      "publishers_title": "Εκδότες Δεδομένων",
      "pub_name": "ΕΛΛΗΝΙΚΟ ΚΤΗΜΑΤΟΛΟΓΙΟ",
      "publishers_text": "Το νομικό πρόσωπο δημοσίου δικαίου με την επωνυμία «Ελληνικό Κτηματολόγιο», ιδρύθηκε με το ν. 4512/2018 και εποπτεύεται σήμερα από το Υπουργείο Ψηφιακής Διακυβέρνησης. Σκοπός του ΝΠΔΔ «Ελληνικό Κτηματολόγιο» είναι η διασφάλιση της αξιοπιστίας, δημοσιότητας και διαθεσιμότητας των χωρικών και νομικών δεδομένων που αφορούν την ακίνητη ιδιοκτησία και η διασφάλιση της δημόσιας πίστης και ασφάλειας των συναλλαγών, σε σχέση με τα δεδομένα αυτά. Ο σκοπός αυτός επιτυγχάνεται με την καταχώριση νομικών και τεχνικών πληροφοριών, για τον ακριβή καθορισμό της θέσης και των ορίων των ακινήτων και τη δημοσιότητα των εγγραπτέων δικαιωμάτων και βαρών μέσω της σύνταξης, τήρησης, ενημέρωσης και λειτουργίας του Εθνικού Κτηματολογίου. Στο σκοπό του επίσης περιλαμβάνεται και η γεωδαιτική και χαρτογραφική κάλυψη της χώρας, καθώς και η δημιουργία και τήρηση ψηφιακών γεωχωρικών δεδομένων.",
      "footer_name": "ΕΛΛΗΝΙΚΟ ΚΤΗΜΑΤΟΛΟΓΙΟ",
      "footer_addr": "Μεσογείων 288, ΤΚ 155 62, Χολαργός, Τηλ: 2106505600",
      "footer_crwith": "Υλοποίηση με χρήση ",
      "footer_opens": "Ανοικτού Λογισμικού",
      "cookies": "Για την καλύτερη εμπειρία στην περιήγηση σας, απαιτείται η χρήση cookies του ιστοτόπου.",
      "cookie_btn": "Αποδέχομαι",
    }
  },
  en: {
    translation: {
      "site_name": "HELLENIC CADASTRE (Land Registry)",
      "site_slogan": "Open Data Portal",
      "menu_home": "Home",
      "menu_datasets": "Datasets",
      "menu_publishers": "Publishers",
      "menu_about": "About",
      "hero_title": "Catalog of Open Data of the Greek Land Registry",
      "hero_intro": "The National Land Registry is a unified and constantly updated information system that records legal, technical and other additional information on real estate and rights over it, under the responsibility and guarantee of the State.",
      "submit_content": "Search",
      "topics": "Topics",
      "featured": "Featured Datasets",
      "sitename_footer": "Hellenic Land Registry",
      "footer_terms": "Terms of use",
      "footer_privacy": "Privacy policy",
      "footer_cookies": "Cookies policy",
      "project_agency": "Agency",
      "opendata_heading": "HELLENIC CADASTRE (Land Registry) Open Data",
      "project_heading": "The project",
      "orgname": "Publisher",
      "identifier": "Identifier",
      "issued": "Issued",
      "modified": "Modified",
      "license": "License",
      "contact_point": "Contact Point",
      "access_level": "Access Level",
      "accrual_periodicity": "Periodicity",
      "tags": " ",
      "org_description": "Το Εθνικό Κτηματολόγιο είναι ένα ενιαίο και διαρκώς ενημερωμένο σύστημα καταγραφής νομικών, τεχνικών και άλλων πληροφοριών για τα ακίνητα, με την ευθύνη και την εγγύηση του Δημοσίου. Πρόκειται για ένα  πλήρως μηχανογραφημένο μητρώο με σημαντικές καινοτομίες και ηλεκτρονικές υπηρεσίες. Ο Φορέας παράγει πλήθος  δεδομένων τα οποία  είναι προσβάσιμα σε κάθε ενδιαφερόμενο. Η ανοικτή διάθεση τους γίνεται με  προτεραιότητα σ’ εκείνα με  προστιθέμενη αξία για τη δημόσια διοίκηση, την κοινωνία, την επιστημονική κοινότητα και την αγορά.",
      "available_info": "The information is also available at ",
      "table_title": "Additional Information",
      "table_th1": "Field",
      "table_th2": "Value",
      "p10y": "Decennial",
      "p4y": "Quadrennial",
      "p1y": "Annual",
      "p2m": "Bimonthly",
      "p35d": "Semiweekly",
      "p1d": "Daily",
      "p2w": "Biweekly",
      "p6m": "Semiannual",
      "p2y": "Biennial",
      "p3y": "Triennial",
      "p033w": "Three times a week",
      "p033m": "Three times a month",
      "pt1s": "Continuously updated",
      "p1m": "Monthly",
      "p3m": "Quarterly",
      "p05m": "Semimonthly",
      "p4m": "Three times a year",
      "p1w": "Weekly",
      "pt1h": "Hourly",
      "terms_of_use": "Terms of use",
      "org_value": "HELLENIC CADASTRE (Land Registry)",
      "datasets": "Datasets",
      "type_here": "Type Here",
      "facet_topics": "Topics",
      "facet_tags": "Tags",
      "facet_publishers": "Publishers",
      "order_by": "Order by",
      "side_date": "Date",
      "side_abc": "Alphabetically",
      "publishers_title": "Publishers",
      "pub_name": "HELLENIC CADASTRE (Land Registry)",
      "publishers_text": "Το νομικό πρόσωπο δημοσίου δικαίου με την επωνυμία «Ελληνικό Κτηματολόγιο», ιδρύθηκε με το ν. 4512/2018 και εποπτεύεται σήμερα από το Υπουργείο Ψηφιακής Διακυβέρνησης. Σκοπός του ΝΠΔΔ «Ελληνικό Κτηματολόγιο» είναι η διασφάλιση της αξιοπιστίας, δημοσιότητας και διαθεσιμότητας των χωρικών και νομικών δεδομένων που αφορούν την ακίνητη ιδιοκτησία και η διασφάλιση της δημόσιας πίστης και ασφάλειας των συναλλαγών, σε σχέση με τα δεδομένα αυτά. Ο σκοπός αυτός επιτυγχάνεται με την καταχώριση νομικών και τεχνικών πληροφοριών, για τον ακριβή καθορισμό της θέσης και των ορίων των ακινήτων και τη δημοσιότητα των εγγραπτέων δικαιωμάτων και βαρών μέσω της σύνταξης, τήρησης, ενημέρωσης και λειτουργίας του Εθνικού Κτηματολογίου. Στο σκοπό του επίσης περιλαμβάνεται και η γεωδαιτική και χαρτογραφική κάλυψη της χώρας, καθώς και η δημιουργία και τήρηση ψηφιακών γεωχωρικών δεδομένων.",
      "footer_name": "HELLENIC CADASTRE (Land Registry)",
      "footer_addr": "Mesogeion 288, PC 155 62, Cholargos, Phone: 2106505600",
      "footer_crwith": "Created using ",
      "footer_opens": "Open Source Software",
      "cookies": "This website uses cookies to enhance the user experience",
      "cookie_btn": "I Agree",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'el',
    fallbackLng: 'el',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;