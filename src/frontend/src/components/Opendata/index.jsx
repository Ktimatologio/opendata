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
    
                <p>Η Πύλη Ανοιχτών Δεδομένων του ελληνικού Κτηματολογίου χρησιμοποιεί:<br/>
                  <ul>
                    <li>το πρότυπο μεταδεδομένων DCAT-AP</li>
                    <li>τo πρότυπο λεξιλόγιο (vocabulary) <a href="http://purl.org/cld/freq/" target="_blank">http://purl.org/cld/freq/</a> για την Περιοδικότητα, η οποία έχει τις τιμές: Δεκαετής, Τετραετής, Ετήσια, Διμηνιαία, Δύο φορές την εβδομάδα, Ημερήσια, Ανά δύο εβδομάδες, Εξαμηνιαία, Διετής, Τριετής, Τρεις φορές την εβδομάδα, Τρεις φορές το μήνα, Συνεχόμενη, Μηνιαία, Τριμηνιαία, Δεκαπενθήμερη, Τετραμηνιαία, Ανά μία εβδομάδα και Ανά μία ώρα</li>
                    <li>το πρότυπο σχήμα <a href="https://www.w3.org/2001/XMLSchema#dateTime%22" target="_blank">https://www.w3.org/2001/XMLSchema#dateTime%22</a> για τις Ημερομηνίες (Created, Published, LastModified), οι οποίες έχουν τη μορφή ΥΥΥΥ-MM-DD.</li>
                    <li>το πρότυπο σχήμα του DCAT <a href="http://www.w3.org/2009/08/skos-reference/skos.html#Concept" target="_blank">http://www.w3.org/2009/08/skos-reference/skos.html#Concept</a> για τη δημιουργία σχήματος σχετικά με τις Κατηγορίες των Συνόλων Δεδομένων</li>
                    <li>το πρότυπο σχήμα <a href="http://purl.org/dc/terms/publisher" target="_blank">http://purl.org/dc/terms/publisher</a>, όπως αυτό ορίζεται στο DCAT, για την εμφάνιση του Εκδότη «Ελληνικό Κτηματολόγιο».</li>
                  </ul>
                </p>
                <p>Ο Φορέας παράγει πλήθος ανοικτών δεδομένων τα οποία  είναι προσβάσιμα από τον κάθε ενδιαφερόμενο. Έχει δοθεί προτεραιότητα  σε δεδομένα που η ανοικτή διάθεση τους μπορεί να έχει προστιθέμενη αξία για τη δημόσια διοίκηση, την κοινωνία, την επιστημονική κοινότητα και την αγορά. Λόγω της φύσης των δεδομένων για τη λήψη ορισμένων εξ’ αυτών απαιτείται η τήρηση ορισμένων προϋποθέσεων κυρίως για λόγους εθνικής ασφάλειας.</p>
                <p>Σημειώνεται ότι αποτελεί στρατηγική απόφαση του Φορέα ο συνεχής εμπλουτισμός του σχετικού καταλόγου των δεδομένων για την περαιτέρω ενίσχυση της διαφάνειας και του ψηφιακού μετασχηματισμού της χώρας.</p>
                <p></p>
                </div>
                <div className="col-md-3 col-sm-12">
                <Announcement variation="info" heading="">
                    <p><a href="/project">Το έργο</a></p>
                    <p><a href="/about">Ο Φορέας</a></p>
                </Announcement>
                </div>
            </div>
        </div>
    </Layout>
);

export default Opendata;
