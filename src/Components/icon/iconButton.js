import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {
  View,
  TouchableOpacity,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
type iconHeading =
  | 'Ionicons'
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'Foundation'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Octicons'
  | 'Zocial'
  | 'SimpleLineIcons';

interface Props extends TouchableOpacityProps {
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  iconHeading?: iconHeading;
  style?: TextStyle;
}

function IconButton({
  iconName,
  iconSize,
  iconColor,
  iconHeading,
  style,
  ...rest
}: Props) {
  const Icon = React.useMemo(
    () =>
      ({
        Ionicons,
        AntDesign,
        Entypo,
        EvilIcons,
        Feather,
        FontAwesome,
        FontAwesome5,
        Fontisto,
        Foundation,
        MaterialIcons,
        MaterialCommunityIcons,
        Octicons,
        Zocial,
        SimpleLineIcons,
      }[iconHeading]),
    [],
  );
  //   const icon1 = <AntDesign name={iconNamevvvrvvvvvv4v4vvvvvvvvvvvvvvdvdbxz                         } size={iconSize} color={iconColor} />;
  return (
    <View>
      <TouchableOpacity {...rest}>
        <Icon name={iconName} size={iconSize} color={iconColor} style={style} />
      </TouchableOpacity>
    </View>
  );
}
export default IconButton;
