import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Buenos días,</Text>
      <Text style={styles.user}>Sara 👋</Text>

      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>OBJETIVO DIARIO: Minutos en el gym</Text>
        <Text style={styles.steps}>75</Text>
        <Text style={styles.stepsLabel}>minutos de 100</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.percentage}>75% completado</Text>
      </View>

      <Text style={styles.sectionTitle}>Resumen</Text>

      <View style={styles.grid}>
        <StatCard icon="🏋️‍♀️" value="4.200" label="Kg movidos" />
        <StatCard icon="🔥" value="450" label="Kcal" />
        <StatCard icon="❤️" value="145" label="BPM Max" />
        <StatCard icon="💧" value="1,5 L" label="Agua" />
      </View>

      <Text style={styles.sectionTitle}>Actividad reciente</Text>
      <Activity title="Día de Pierna" detail="Volumen alto · 65 min" />
      <Activity title="Cardio (Cinta)" detail="Inclinación 12% · 20 min" />
    </ScrollView>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
    
      <View style={styles.statHeader}>
         <Text style={styles.statIcon}>{icon}</Text>
         <Text style={styles.statValue}>{value}</Text>
      </View>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Activity({ title, detail }: { title: string; detail: string }) {
  return (
    <View style={styles.activity}>
      <View>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityDetail}>{detail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120d18',
    paddingHorizontal: 20,
  },
  greeting: {
    marginTop: 60,
    color: '#fbcfe8', 
    fontSize: 17,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'white',
  },
  goalCard: {
    backgroundColor: '#fdf2f8',
    padding: 24,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#f59e0b', 
  },
  goalLabel: {
    color: '#831843', 
    fontWeight: 'bold',
  },
  steps: {
    marginTop: 12,
    color: '#831843',
    fontSize: 44,
    fontWeight: 'bold',
  },
  stepsLabel: {
    color: '#9d174d',
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#fbcfe8',
    borderRadius: 5,
    marginTop: 24,
    overflow: 'hidden',
  },
  progress: {
    width: '75%',
    height: '100%',
    backgroundColor: '#f59e0b',
  },
  percentage: {
    color: '#9d174d',
    marginTop: 9,
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#1f1627',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#3b284a',
  },
  statHeader: {
    flexDirection: 'row', //CAMBIADA: peticion ejercicio 
    alignItems: 'center',
    gap: 8,
  },
  statIcon: {
    fontSize: 24,
  },
  statValue: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    marginTop: 8,
    color: '#fbcfe8',
  },
  activity: {
    backgroundColor: '#1f1627',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#3b284a',
  },
  activityTitle: {
    fontWeight: 'bold',
    color: 'white',
  },
  activityDetail: {
    marginTop: 4,
    color: '#fbcfe8',
  },
});