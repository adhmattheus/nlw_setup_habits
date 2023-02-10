import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/Backbutton";
import { Checkbox } from "../components/Checkbox";
import { Feather } from '@expo/vector-icons';
import { useState } from "react";
import colors from "tailwindcss/colors";

const avaiableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

export function New() {

  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekday => weekday !== weekDayIndex));
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
  };

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>

        <BackButton />

        <Text className="mt-3 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-3 text-white font-semibold text-base">
          Qual seu comprometimeto?
        </Text>

        <TextInput
          placeholder="Exercícios, dormir be, etc..."
          placeholderTextColor={colors.zinc[400]}
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 txt-white focus:border-2 focus:border-green-600"
        />

        <Text className="text-white text-base font-semibold mt-3 mb-3">Qual a recorrência ?</Text>

        {
          avaiableWeekDays.map((weekDay, index) => (
            <Checkbox
              key={weekDay}
              title={weekDay}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDay(index)}
            />
          ))
        }

        <TouchableOpacity className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-2">
          <Feather name="check" size={20} color={colors.white} />
          <Text className="font-semibold text-base ml-2 text-white">Confimar</Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}