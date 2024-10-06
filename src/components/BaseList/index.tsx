import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  ListRenderItemInfo,
  ListRenderItem,
  StyleSheet,
  View,
  RefreshControl,
} from 'react-native';
import { SwipeListView, RowMap } from 'react-native-swipe-list-view';
import { COLORS } from '@/Theme/Colors';
import { GLOBALS } from '@/Constants/Globals';
import { BaseEmptyList } from './BaseEmptyList';

type BaseProps = {
  itemHeight?: number;
  loading?: boolean;
  listEmptyMessage?: string;
  swipeable?: boolean;
};

export type BaseListProps<Option> = Omit<FlatListProps<Option>, 'renderItem'> &
  BaseProps &
  (
    | {
        swipeable?: true;
        renderItem?: never;
        renderHiddenItem?: (
          rowData: ListRenderItemInfo<Option>,
          rowMap: RowMap<Option>
        ) => JSX.Element | null;
        renderSwipeItem?: (
          rowData: ListRenderItemInfo<Option>,
          rowMap: RowMap<Option>
        ) => JSX.Element | null;
        onRowOpen?: (rowKey: string, rowMap: RowMap<Option>, toValue: number) => void;
        onRowClose?: (rowKey: string, rowMap: RowMap<Option>) => void;
      }
    | {
        swipeable?: false;
        renderItem: ListRenderItem<Option> | null | undefined;
        renderSwipeItem?: never;
        renderHiddenItem?: never;
        onRowOpen?: never;
        onRowClose?: never;
      }
  );

export function BaseList<Option>({
  renderItem,
  renderSwipeItem,
  renderHiddenItem,
  onRowOpen,
  onRowClose,
  onRefresh,
  keyExtractor,
  data,
  swipeable,
  ListHeaderComponent,
  listEmptyMessage,
  ListEmptyComponent,
  ListFooterComponent,
  refreshing,
  itemHeight,
  loading,
  style,
  contentContainerStyle,
  keyboardShouldPersistTaps = 'always',
  ...nativeProps
}: BaseListProps<Option>) {
  const getItemLayout = (_: any, index: number) => ({
    length: itemHeight,
    offset: (itemHeight as number) * index,
    index,
  });

  const renderLoader = () => (
    <View style={styles.loader}>
      <ActivityIndicator size={GLOBALS.ICON_SCALE} color={COLORS.NEUTRAL_900} />
    </View>
  );

  const renderListEmptyComponent = () => {
    if (loading) return renderLoader();
    return ListEmptyComponent || <BaseEmptyList listEmptyMessage={listEmptyMessage} />;
  };

  const extractKey = (item: Option, index: number) => {
    if (keyExtractor) {
      return keyExtractor(item, index);
    }

    return index.toString();
  };

  const commonProps = {
    data: loading ? [] : data,
    refreshing,
    style: [styles.container, style],
    contentContainerStyle: [
      styles.contentContainer,
      contentContainerStyle,
      (!data?.length || loading) && styles.emptyList,
    ],
    ListHeaderComponent,
    ListEmptyComponent: renderListEmptyComponent(),
    ListFooterComponent: ListFooterComponent,
    keyExtractor: extractKey,
    onRefresh,
    initialNumToRender: 10,
    maxToRenderPerBatch: 5,
    onEndReachedThreshold: 0.7,
    ...nativeProps,
  };

  return swipeable ? (
    <SwipeListView
      renderItem={renderSwipeItem}
      rightOpenValue={-170}
      closeOnRowPress
      disableRightSwipe
      renderHiddenItem={renderHiddenItem}
      onRowOpen={onRowOpen}
      onRowClose={onRowClose}
      {...commonProps}
    />
  ) : (
    <FlatList
      renderItem={renderItem}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      refreshControl={
        <RefreshControl
          colors={[COLORS.PRIMARY_DARK]} // Android only
          refreshing={!!refreshing}
          onRefresh={() => {
            onRefresh?.();
          }}
        />
      }
      {...{ ...(itemHeight && getItemLayout) }}
      {...commonProps}
    />
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
