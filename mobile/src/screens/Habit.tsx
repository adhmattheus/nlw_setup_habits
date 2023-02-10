import { BackButton } from "../components/Backbutton";
import { ScrollView, View, Text } from "react-native";
import { useRoute } from '@react-navigation/native'
import dayjs from 'dayjs'
import { ProgressBar } from "../components/ProgressBar";

interface Params {
  date: string;
}

export function Habit() {

  const route = useRoute();
  const { date } = route.params as Params;
  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMonth = parsedDate.format('DD/MM');


  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <BackButton />

        <Text className="text-zinc-400 font-semibold text-base lowercase mt-3 ">
          {dayOfWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl ">
          {dayAndMonth}
        </Text>

        <ProgressBar />

      </ScrollView>
    </View>
  );
}