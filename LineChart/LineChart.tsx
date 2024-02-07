import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './constants/styles';
import colors from './constants/colors';
import LineChartProps from './constants/interfaces';
import {RenderItem} from './components/RenderItem';

const width = Dimensions.get('screen').width;

const columnWidthDefault = width * 0.92 - 20;
const columnHeightDefault: number = 150;
const dotSizeDefault: number = 10;
const lineWidthDefault: number = 2;

export default function LineChart(props: LineChartProps) {
  const dotSize = props.dotSize || dotSizeDefault;
  const lineWidth = props.lineWidth || lineWidthDefault;
  const columnHeight = props.columnHeight || columnHeightDefault;
  const columnWidth = props.columnWidth || columnWidthDefault;

  return (
    <View style={[styles.container, {...props.containerStyles}]}>
      <FlatList
        style={{width: '100%'}}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={props.items}
        scrollsToTop
        renderItem={({item, index}: any) => (
          <RenderItem
            item={item}
            index={index}
            dotSize={dotSize}
            lineWidth={lineWidth}
            columnHeight={columnHeight}
            columnWidth={columnWidth}
            items={props.items}
            lineColor={props.lineColor}
            dotColor={props.dotColor}
            onDotPress={() => {
              props.onDotPress(item.value);
            }}
          />
        )}
        initialNumToRender={props.items.length}
        removeClippedSubviews={true}
        getItemLayout={(_: any, index: number) => ({
          length: columnWidth / props.items.length,
          offset: (columnWidth / props.items.length) * index,
          index,
        })}
      />
    </View>
  );
}
