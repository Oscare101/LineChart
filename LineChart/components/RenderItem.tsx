import {TouchableOpacity, View} from 'react-native';
import {
  GetAngle,
  GetDotPosition,
  GetHeightDifference,
} from '../functions/functions';
import colors from '../constants/colors';

export function RenderItem(props: any) {
  return (
    <View
      style={{
        height: props.columnHeight,
        width: props.columnWidth / props.items.length,
        position: 'relative',
        overflow: 'visible',
      }}>
      <View
        style={{
          position: 'absolute',
          width: props.dotSize,
          height: props.dotSize,
          left: props.columnWidth / props.items.length / 2 - props.dotSize / 2,
          bottom: GetDotPosition(
            props.item.value,
            props.dotSize,
            props.items,
            props.columnHeight,
          ),
          transform: [
            {
              rotate: props.items[props.index + 1]
                ? `${GetAngle(
                    props.item.value,
                    props.items[props.index + 1].value,
                    props.dotSize,
                    props.columnWidth,
                    props.columnHeight,
                    props.items,
                  )}deg`
                : '0deg',
            },
          ],
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={props.onDotPress}
          style={{
            width: props.dotSize,
            height: props.dotSize,
            borderRadius: props.dotSize,
            backgroundColor: props.dotColor || colors.dot,
            zIndex: 2,
          }}></TouchableOpacity>
        {props.items[props.index + 1] ? (
          <View
            style={{
              position: 'absolute',
              backgroundColor: props.lineColor || colors.line,
              width: Math.sqrt(
                (props.columnWidth / props.items.length) ** 2 +
                  GetHeightDifference(
                    props.item.value,
                    props.items[props.index + 1].value,
                    props.dotSize,
                    props.columnHeight,
                    props.items,
                  ) **
                    2,
              ),
              height: props.lineWidth,
              left: props.dotSize / 2,
              bottom: props.dotSize / 2 - props.lineWidth / 2,
              borderRadius: props.lineWidth,
            }}
          />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}
