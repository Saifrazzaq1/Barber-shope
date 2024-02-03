import React from 'react';
import {Image, View} from 'react-native';
import {widthRef} from 'src/config/screenSize';
import Text from '../Text';
import styles from './style';
export default function HeaderCard({
  color,
  flexDirection,
  width = '100%',
  elevation,
  iconColor,
  editColor,
  text,
  source,
  textColor,
  textFontSize = 16,
  textAlign,
  textContainerColor,
  fontContainerSize,
  textContainer,
  textContainerShow = false,
  showEditIcon = false,
  editSource,
  tintColor = '#1C3078',
  btnHight,
}) {
  return (
    <View>
      <View
        style={[
          styles.card,
          {
            backgroundColor: color,
            flexDirection: flexDirection,
            width: width || width * widthRef,
            elevation: elevation,
          },
        ]}>
        <Image
          source={source}
          style={[styles.image, {tintColor: tintColor || tintColor}]}
        />
        <View
          style={[
            styles.barberNameTextView,
            {
              flexDirection: showEditIcon ? 'row' : 'column',
              alignItems: showEditIcon ? 'center' : null,
              justifyContent: showEditIcon ? 'space-between' : 'center',
            },
          ]}>
          <Text
            color={textColor}
            fontWeight="600"
            fontFamily="Montserrat-Bold"
            fontSize={textFontSize}
            style={[styles.barberName, {textAlign: textAlign}]}>
            {text}
          </Text>
          {showEditIcon ? (
            <View>
              <Image source={editSource} style={styles.image} />
            </View>
          ) : null}
          {textContainerShow ? (
            <Text
              color={textContainerColor}
              fontSize={fontContainerSize}
              style={[styles.barberName, {textAlign: textAlign}]}>
              {textContainer}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
}
