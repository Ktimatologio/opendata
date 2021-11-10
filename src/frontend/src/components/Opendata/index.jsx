import React from "react";
import "../../i18n";
import { useTranslation } from 'react-i18next';
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";

function Heading_od() {
    const { t, i18n } = useTranslation();
    return (
          <h1>{t('opendata_heading')}</h1>
    );
  }

const Opendata = ({ path }) => (
    <Layout title="Opendata">
        <div className={`dc-page ${config.container}`}>
            <Heading_od/>
            <div className="dc-page-content row">
                <div class="col-md-9 col-sm-12">
    
                <p>Με την ψήφιση του νόμου ν.4727/2020, η χώρα διαθέτει πλέον ένα συνεκτικό και πλήρες πλαίσιο για την ηλεκτρονική διακυβέρνηση της, το οποίο εναρμονίζεται  με την αντίστοιχη ευρωπαϊκή νομοθεσία (Οδηγία (ΕΕ) 2019/1024). Τα ανοιχτά δεδομένα αποτελούν βασικό άξονα αυτής της πολιτικής με σκοπό την περαιτέρω χρήση των δεδομένων του Δημοσίου για ποικίλες χρήσεις.</p>
                <p>Ο Φορέας παράγει πλήθος ανοικτών δεδομένων τα οποία  είναι προσβάσιμα από τον κάθε ενδιαφερόμενο. Έχει δοθεί προτεραιότητα  σε δεδομένα που η ανοικτή διάθεση τους μπορεί να έχει προστιθέμενη αξία για τη δημόσια διοίκηση, την κοινωνία, την επιστημονική κοινότητα και την αγορά. Λόγω της φύσης των δεδομένων για τη λήψη ορισμένων εξ’ αυτών απαιτείται η τήρηση ορισμένων προϋποθέσεων κυρίως για λόγους εθνικής ασφάλειας.</p>
                <p>Σημειώνεται ότι αποτελεί στρατηγική απόφαση του Φορέα ο συνεχής εμπλουτισμός του σχετικού καταλόγου των δεδομένων για την περαιτέρω ενίσχυση της διαφάνειας και του ψηφιακού μετασχηματισμού της χώρας.</p>
                <p></p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <Announcement variation="info" heading="">
                    <p></p>
                    </Announcement>
                </div>
            </div>
        </div>
    </Layout>
);

export default Opendata;
