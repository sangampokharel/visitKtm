import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import Modal from "../../Modals/Modal";
import { colors } from "../../../../constant/colors";

const About = () => {
  const [visible, setVisible] = useState(false);
  const list = [
    {
      title: "FAQ",
      icon: "av-timer",
    },
    {
      title: "Terms and Policy",
      icon: "flight-takeoff",
    },
  ];

  const closeModal = () => setVisible(false);
  const { primary } = colors;

  return (
    <View>
      <Text style={{ textAlign: "center", marginVertical: 10, fontSize: 30 }}>
        About us
      </Text>
      {/** TODO MAKE LIST REUSABLE... */}
      {list.map((item, i) => (
        <Text></Text>
      ))}

      <Modal visible={visible} closeModal={closeModal}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.faqContainer}>
            <Text h4>What is Visit Kathmandu App for?</Text>
            <Text>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used before final copy is available, but it may also be used to
              temporarily replace copy in a process called
            </Text>
          </View>
          <View>
            <Text h4>What is Visit Kathmandu App for?</Text>
            <Text>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used before final copy is available, but it may also be used to
              temporarily replace copy in a process called
            </Text>
          </View>
          <View>
            <Text h4>What is Visit Kathmandu App for?</Text>
            <Text>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used before final copy is available, but it may also be used to
              temporarily replace copy in a process called
            </Text>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  faqContainer: {
    width: "90%",
    marginVertical: 20,
    lineHeight: 5,
  },
});
