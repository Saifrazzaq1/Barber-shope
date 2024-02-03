import {ScrollView, View} from 'react-native';
import React from 'react';
import Text from 'src/Components/Text';
import Header from 'src/Components/Header';
import styles from './style';
export default function TermCondition({navigation}) {
  return (
    <ScrollView style={styles.main} stickyHeaderIndices={[0]}>
      <Header navigation={navigation} headerText="Terms & Conditions" />
      <View style={styles.card}>
        <Text fontSize={16} color="#0E0E0E" style={styles.cardText}>
          These terms and conditions (“Agreement”) set forth the general terms
          and conditions of your use of the “Barber Shop” mobile application
          (“Mobile Application” or “Service”) and any of its related products
          and services (collectively, “Services”). This Agreement is legally
          binding between you (“User”, “you” or “your”) and this Mobile
          Application developer (“Operator”, “we”, “us” or “our”). If you are
          entering into this agreement on behalf of a business or other legal
          entity, you represent that you have the authority to bind such entity
          to this agreement, in which case the terms “User”, “you” or “your”
          shall refer to such entity. If you do not have such authority, or if
          you do not agree with the terms of this agreement, you must not accept
          this agreement and may not access and use the Mobile Application and
          Services. By accessing and using the Mobile Application and Services,
          you acknowledge that you have read, understood, and agree to be bound
          by the terms of this Agreement. You acknowledge that this Agreement is
          a contract between you and the Operator, even though it is electronic
          and is not physically signed by you, and it governs your use of the
          Mobile Application and Services.
        </Text>
      </View>
      <Text color="grey" fontSize={18} style={styles.heading}>
        Accounts and Membership
      </Text>
      <View style={styles.card}>
        <Text fontSize={16} color="#0E0E0E" style={styles.cardText}>
          You must be at least 13 years of age to use the Mobile Application and
          Services. By using the Mobile Application and Services and by agreeing
          to this Agreement you warrant and represent that you are at least 13
          years of age. If you create an account in the Mobile Application, you
          are responsible for maintaining the security of your account and you
          are fully responsible for all activities that occur under the account
          and any other actions taken in connection with it. We may, but have no
          obligation to, monitor and review new accounts before you may sign in
          and start using the Services. Providing false contact information of
          any kind may result in the termination of your account. You must
          immediately notify us of any unauthorized uses of your account or any
          other breaches of security. We will not be liable for any acts or
          omissions by you, including any damages of any kind incurred as a
          result of such acts or omissions. We may suspend, disable, or delete
          your account (or any part thereof) if we determine that you have
          violated any provision of this Agreement or that your conduct or
          content would tend to damage our reputation and goodwill. If we delete
          your account for the foregoing reasons, you may not re-register for
          our Services. We may block your email address and Internet protocol
          address to prevent further registration.
        </Text>
      </View>
      <Text color="grey" fontSize={18} style={styles.heading}>
        Links to other resources
      </Text>
      <View style={styles.card}>
        <Text fontSize={16} color="#0E0E0E" style={styles.cardText}>
          Although the Mobile Application and Services may link to other
          resources (such as websites, mobile applications, etc.), we are not,
          directly or indirectly, implying any approval, association,
          sponsorship, endorsement, or affiliation with any linked resource,
          unless specifically stated herein. Some of the links in the Mobile
          Application may be “affiliate links”. This means if you click on the
          link and purchase an item, the Operator will receive an affiliate
          commission. We are not responsible for examining or evaluating, and we
          do not warrant the offerings of, any businesses or individuals or the
          content of their resources. We do not assume any responsibility or
          liability for the actions, products, services, and content of any
          other third parties. You should carefully review the legal statements
          and other conditions of use of any resource which you access through a
          link in the Mobile Application. Your linking to any other off-site
          resources is at your own risk.
        </Text>
      </View>
      <Text color="grey" fontSize={18} style={styles.heading}>
        Prohibited uses
      </Text>
      <View style={styles.card}>
        <Text fontSize={16} color="#0E0E0E" style={styles.cardText}>
          In addition to other terms as set forth in the Agreement, you are
          prohibited from using the Mobile Application and Services or Content:
          (a) for any unlawful purpose; (b) to solicit others to perform or
          participate in any unlawful acts; (c) to violate any international,
          federal, provincial or state regulations, rules, laws, or local
          ordinances; (d) to infringe upon or violate our intellectual property
          rights or the intellectual property rights of others; (e) to harass,
          abuse, insult, harm, defame, slander, disparage, intimidate, or
          discriminate based on gender, sexual orientation, religion, ethnicity,
          race, age, national origin, or disability; (f) to submit false or
          misleading information; (g) to upload or transmit viruses or any other
          type of malicious code that will or may be used in any way that will
          affect the functionality or operation of the Mobile Application and
          Services, third party products and services, or the Internet; (h) to
          spam, phish, pharm, pretext, spider, crawl, or scrape; (i) for any
          obscene or immoral purpose; or (j) to interfere with or circumvent the
          security features of the Mobile Application and Services, third party
          products and services, or the Internet. We reserve the right to
          terminate your use of the Mobile Application and Services for
          violating any of the prohibited uses.
        </Text>
      </View>
      <Text color="grey" fontSize={18} style={styles.heading}>
        Intellectual property rights
      </Text>
      <View style={styles.card}>
        <Text fontSize={16} color="#0E0E0E" style={styles.cardText}>
          “Intellectual Property Rights” means all present and future rights
          conferred by statute, common law or equity in or in relation to any
          copyright and related rights, trademarks, designs, patents,
          inventions, goodwill and the right to sue for passing off, rights to
          inventions, rights to use, and all other intellectual property rights,
          in each case whether registered or unregistered and including all
          applications and rights to apply for and be granted, rights to claim
          priority from, such rights and all similar or equivalent rights or
          forms of protection and any other results of intellectual activity
          which subsist or will subsist now or in the future in any part of the
          world. This Agreement does not transfer to you any intellectual
          property owned by the Operator or third parties, and all rights,
          titles, and interests in and to such property will remain (as between
          the parties) solely with the Operator. All trademarks, service marks,
          graphics and logos used in connection with the Mobile Application and
          Services, are trademarks or registered trademarks of the Operator or
          its licensors. Other trademarks, service marks, graphics and logos
          used in connection with the Mobile Application and Services may be the
          trademarks of other third parties. Your use of the Mobile Application
          and Services grants you no right or license to reproduce or otherwise
          use any of the Operator or third party trademarks.
        </Text>
      </View>
      <Text color="grey" fontSize={18} style={styles.heading}>
        Indemnification
      </Text>
      <View style={styles.card}>
        <Text fontSize={16} color="#0E0E0E" style={styles.cardText}>
          You agree to indemnify and hold the Operator and its affiliates,
          directors, officers, employees, agents, suppliers and licensors
          harmless from and against any liabilities, losses, damages or costs,
          including reasonable attorneys’ fees, incurred in connection with or
          arising from any third party allegations, claims, actions, disputes,
          or demands asserted against any of them as a result of or relating to
          your Content, your use of the Mobile Application and Services or any
          willful misconduct on your part.
        </Text>
      </View>
      <Text color="grey" fontSize={18} style={styles.heading}>
        Severability
      </Text>
      <View style={styles.card}>
        <Text fontSize={16} color="#0E0E0E" style={styles.cardText}>
          All rights and restrictions contained in this Agreement may be
          exercised and shall be applicable and binding only to the extent that
          they do not violate any applicable laws and are intended to be limited
          to the extent necessary so that they will not render this Agreement
          illegal, invalid or unenforceable. If any provision or portion of any
          provision of this Agreement shall be held to be illegal, invalid or
          unenforceable by a court of competent jurisdiction, it is the
          intention of the parties that the remaining provisions or portions
          thereof shall constitute their agreement with respect to the subject
          matter hereof, and all such remaining provisions or portions thereof
          shall remain in full force and effect.
        </Text>
      </View>
      <Text color="grey" fontSize={18} style={styles.heading}>
        Changes and amendments
      </Text>
      <View style={styles.card}>
        <Text fontSize={16} color="#0E0E0E" style={styles.cardText}>
          We reserve the right to modify this Agreement or its terms related to
          the Mobile Application and Services at any time at our discretion.
          When we do, we will revise the updated date at the bottom of this
          page. We may also provide notice to you in other ways at our
          discretion, such as through the contact information you have provided.
        </Text>

        <Text
          fontSize={16}
          color="#0E0E0E"
          style={[styles.cardText, {marginTop: 10}]}>
          An updated version of this Agreement will be effective immediately
          upon the posting of the revised Agreement unless otherwise specified.
          Your continued use of the Mobile Application and Services after the
          effective date of the revised Agreement (or such other act specified
          at that time) will constitute your consent to those changes.
        </Text>
      </View>
      <Text color="grey" fontSize={18} style={styles.heading}>
        Acceptance of these terms
      </Text>
      <View style={styles.card}>
        <Text fontSize={16} color="#0E0E0E" style={styles.cardText}>
          You acknowledge that you have read this Agreement and agree to all its
          terms and conditions. By accessing and using the Mobile Application
          and Services you agree to be bound by this Agreement. If you do not
          agree to abide by the terms of this Agreement, you are not authorized
          to access or use the Mobile Application and Services. This terms and
          conditions policy was created with the terms and conditions generator.
        </Text>
      </View>
      <Text color="#1C3078" fontSize={18} style={styles.heading}>
        Contacting us
      </Text>
      <View style={styles.card}>
        <Text fontSize={16} color="#0E0E0E" style={styles.cardText}>
          If you have any questions, concerns, or complaints regarding this
          Agreement, we encourage you to contact us using the details below:
        </Text>
        <Text
          fontSize={16}
          color="#0E0E0E"
          style={[styles.cardText, {marginTop: 10}]}>
          contact@barbershop.com Johar Town, Lahore, 42000, Pakistan
        </Text>
        <Text
          fontSize={16}
          color="#0E0E0E"
          style={[styles.cardText, {marginTop: 10}]}>
          This document was last updated on
        </Text>
        <Text
          fontSize={16}
          color="#0E0E0E"
          style={[styles.cardText, {marginTop: 10}]}>
          November 22, 2021
        </Text>
      </View>
    </ScrollView>
  );
}
